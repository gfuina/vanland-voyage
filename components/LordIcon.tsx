"use client";

import React, { useEffect, useRef } from "react";

interface LordIconProps {
  src: string;
  trigger?: "hover" | "click" | "loop" | "loop-on-hover" | "morph" | "morph-two-way";
  colors?: string; // Format: "primary:#121331,secondary:#08a88a"
  stroke?: string | number;
  size?: number;
  delay?: number;
  state?: string;
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        trigger?: string;
        colors?: string;
        stroke?: string | number;
        delay?: number;
        state?: string;
      };
    }
  }
}

export default function LordIcon({
  src,
  trigger = "hover",
  colors,
  stroke,
  size = 96,
  delay,
  state,
  className = "",
  style = {},
}: LordIconProps) {
  const iconRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Charger le script Lordicon s'il n'est pas déjà chargé
    if (!document.querySelector('script[src*="lordicon"]')) {
      const script = document.createElement("script");
      script.src = "https://cdn.lordicon.com/lordicon.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const iconProps: Record<string, string | number | React.CSSProperties> = {
    src,
    trigger,
    style: {
      width: `${size}px`,
      height: `${size}px`,
      ...style,
    },
  };

  if (colors) iconProps.colors = colors;
  if (stroke) iconProps.stroke = stroke;
  if (delay) iconProps.delay = delay;
  if (state) iconProps.state = state;

  return React.createElement("lord-icon", {
    ref: iconRef,
    className,
    ...iconProps,
  });
}

