"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type PhotoRotatorProps = {
  images: string[];
  alt: string;
  className: string;
  initialDelayMs?: number;
};

const AUTO_FADE_DELAY_MS = 8000;

export default function PhotoRotator({
  images,
  alt,
  className,
  initialDelayMs = 0,
}: PhotoRotatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const firstCycle = useRef(true);

  useEffect(() => {
    if (images.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const delay = AUTO_FADE_DELAY_MS + (firstCycle.current ? initialDelayMs : 0);
    firstCycle.current = false;
    const timeout = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, images.length, initialDelayMs]);

  const showPrevious = () => {
    firstCycle.current = false;
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    firstCycle.current = false;
    setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    <div className={`${className} interactive-photo-rotator`}>
      {images.map((src, index) => (
        <Image
          className={index === activeIndex ? "is-active" : ""}
          src={src}
          alt={`${alt}${images.length > 1 ? `, view ${index + 1}` : ""}`}
          aria-hidden={index !== activeIndex}
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
          key={src}
        />
      ))}
      {images.length > 1 ? (
        <div className="photo-rotator-controls" role="group" aria-label={`${alt} photo controls`}>
          <button type="button" onClick={showPrevious} aria-label={`Previous ${alt} photo`}>
            <span aria-hidden="true">‹</span>
          </button>
          <button type="button" onClick={showNext} aria-label={`Next ${alt} photo`}>
            <span aria-hidden="true">›</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
