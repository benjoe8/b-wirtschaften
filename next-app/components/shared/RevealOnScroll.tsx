// components/shared/RevealOnScroll.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  staggerChildren?: boolean;
}

export function RevealOnScroll({
  children,
  delay = 0,
  className = "",
  staggerChildren = false
}: RevealOnScrollProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [controls, isInView]);

  const variants = staggerChildren ? staggerContainer : fadeInUp;

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}