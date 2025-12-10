"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";

interface SlideTextButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  hoverText?: string;
  href?: string;
  className?: string;
  variant?: "default" | "ghost";
  icon?: React.ReactNode;
}

export default function SlideTextButton({
  text = "Browse Components",
  hoverText,
  href = "#",
  className,
  variant = "default",
  icon = <ArrowRight className="w-4 h-4" />,
  ...props
}: SlideTextButtonProps) {
  const slideText = hoverText ?? text;

  const variantStyles =
    variant === "ghost"
      ? "border border-primary/20 text-primary hover:bg-primary/10"
      : "bg-primary text-white hover:bg-primary/90";

  const iconWrapper = (
    <span className="inline-flex items-center justify-center w-4 h-4">
      {React.cloneElement(icon as React.ReactElement<{ className: string }>, { className: "w-4 h-4" })}
    </span>
  );


  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
      className="relative"
    >
      <Link
        href={href}
        {...props}
        className={cn(
          "group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-lg px-8 font-medium text-md tracking-tight transition-all duration-300 md:min-w-56 whitespace-nowrap",
          "flex items-center justify-center", // Make sure contents are centered
          variantStyles,
          className
        )}
      >
        {/* Slide animation wrapper */}
        <span className="group-hover:-translate-y-full relative inline-block transition-transform duration-300 ease-in-out w-full">

          {/* Default text */}
          <span className="flex items-center justify-center gap-2 w-full opacity-100 transition-opacity duration-300 group-hover:opacity-0">
            <span className="font-medium">{text}</span>
            {iconWrapper}
          </span>

          {/* Hover text — FIXED CENTERING */}
          <span className="
      absolute top-full inset-x-0 
      flex items-center justify-center gap-2 
      opacity-0 transition-opacity duration-300 group-hover:opacity-100
    ">
            <span className="font-medium">{slideText}</span>
            {iconWrapper}
          </span>

        </span>

      </Link>
    </motion.div>
  );
}
