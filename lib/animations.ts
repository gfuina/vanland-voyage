// Optimized animations for mobile
export const getAnimation = (isMobile: boolean) => {
  if (isMobile) {
    // Simple fade only on mobile for performance
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.4 },
    };
  }

  // Full animations on desktop
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 },
  };
};

export const getStaggerAnimation = (isMobile: boolean, index: number) => {
  if (isMobile) {
    // No stagger on mobile
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.4 },
    };
  }

  // Stagger on desktop
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, delay: index * 0.1 },
  };
};

