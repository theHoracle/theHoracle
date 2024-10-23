"use client";
import { useState, useEffect, useCallback } from "react";

interface Position {
  x: number;
  y: number;
}

interface GradientConfig {
  size?: number;
  color?: string;
  opacity?: number;
}

interface MouseGradientProps extends Partial<GradientConfig> {
  className?: string;
}

const DEFAULT_CONFIG: GradientConfig = {
  size: 600,
  color: "30, 80, 220",
  opacity: 0.15,
};

const MouseGradient = ({
  size = DEFAULT_CONFIG.size,
  color = DEFAULT_CONFIG.color,
  opacity = DEFAULT_CONFIG.opacity,
  className = "",
}: MouseGradientProps) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const updatePosition = useCallback((e: MouseEvent) => {
    const x = e.clientX + window.scrollX;
    const y = e.clientY + window.scrollY;
    setPosition({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", updatePosition);

    // Set initial position
    setPosition({
      x: window.scrollX,
      y: window.scrollY,
    });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, [updatePosition]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{
        background: `radial-gradient(${size}px at ${position.x}px ${position.y}px, rgba(${color}, ${opacity}), transparent 80%)`,
      }}
      aria-hidden="true"
    />
  );
};

export default MouseGradient;
