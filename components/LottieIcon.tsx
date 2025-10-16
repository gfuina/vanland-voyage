"use client";

import { useRef, useMemo } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface LottieIconProps {
  animationData: any; // JSON Lottie data
  size?: number;
  loop?: boolean;
  autoplay?: boolean;
  playOnHover?: boolean; // Jouer au survol
  className?: string;
  style?: React.CSSProperties;
  colorReplacements?: { [key: string]: string }; // Remplacer des couleurs
}

// Fonction pour convertir hex en RGB normalisé [0-1]
function hexToRgb(hex: string): [number, number, number] {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;
  return [r, g, b];
}

// Fonction pour comparer deux couleurs RGB (tolérance pour les arrondis)
function rgbMatch(rgb1: number[], rgb2: [number, number, number]): boolean {
  const tolerance = 0.01;
  return (
    Math.abs(rgb1[0] - rgb2[0]) < tolerance &&
    Math.abs(rgb1[1] - rgb2[1]) < tolerance &&
    Math.abs(rgb1[2] - rgb2[2]) < tolerance
  );
}

// Fonction récursive pour remplacer les couleurs dans l'animation
function replaceColors(obj: any, replacements: { [key: string]: string }): any {
  if (Array.isArray(obj)) {
    return obj.map((item) => replaceColors(item, replacements));
  } else if (obj !== null && typeof obj === "object") {
    const newObj: any = {};
    for (const key in obj) {
      if (key === "k" && Array.isArray(obj[key]) && obj[key].length >= 3) {
        // C'est potentiellement une couleur RGB
        const currentRgb = obj[key].slice(0, 3);
        let replaced = false;

        for (const [fromHex, toHex] of Object.entries(replacements)) {
          const fromRgb = hexToRgb(fromHex);
          if (rgbMatch(currentRgb, fromRgb)) {
            const toRgb = hexToRgb(toHex);
            newObj[key] = [...toRgb, ...(obj[key].length > 3 ? [obj[key][3]] : [])];
            replaced = true;
            break;
          }
        }

        if (!replaced) {
          newObj[key] = replaceColors(obj[key], replacements);
        }
      } else {
        newObj[key] = replaceColors(obj[key], replacements);
      }
    }
    return newObj;
  }
  return obj;
}

export default function LottieIcon({
  animationData,
  size = 64,
  loop = true,
  autoplay = true,
  playOnHover = false,
  className = "",
  style = {},
  colorReplacements,
}: LottieIconProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  // Appliquer les remplacements de couleurs si fournis
  const processedAnimationData = useMemo(() => {
    if (colorReplacements && Object.keys(colorReplacements).length > 0) {
      return replaceColors(animationData, colorReplacements);
    }
    return animationData;
  }, [animationData, colorReplacements]);

  const handleMouseEnter = () => {
    if (playOnHover && lottieRef.current) {
      lottieRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (playOnHover && lottieRef.current) {
      lottieRef.current.stop();
    }
  };

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        display: "inline-block",
        ...style,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={processedAnimationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

