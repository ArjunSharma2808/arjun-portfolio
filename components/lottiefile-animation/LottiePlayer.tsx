"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface LottiePlayerProps {
  path: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

const LottiePlayer = ({
  path,
  loop = true,
  autoplay = true,
  className,
}: LottiePlayerProps) => {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // confirms it's client-side
    const loadAnimation = async () => {
      try {
        const response = await fetch(`/lottie/${path}`);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Lottie load error:", error);
      }
    };
    loadAnimation();
  }, [path]);

  if (!isClient || !animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  );
};

export default LottiePlayer;
