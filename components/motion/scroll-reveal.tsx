"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

type ScrollRevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
};

/**
 * Small reusable wrapper that fades content in and slides it up
 * when it enters the viewport. Optimized for scroll-based reveals
 * on both desktop and mobile.
 */
const ScrollReveal = ({
    children,
    className,
    delay = 0,
    duration = 0.55,
    yOffset = 24,
}: ScrollRevealProps) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay, duration, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;

