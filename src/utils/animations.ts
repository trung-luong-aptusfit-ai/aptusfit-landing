import { Variants } from 'framer-motion';

/**
 * Fade up animation for hero elements
 * Staggered entrance effect
 */
export const fadeUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: (custom: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: custom * 0.2,
            ease: [0.22, 1, 0.36, 1] // Custom easing curve
        }
    })
};

/**
 * Scroll-triggered reveal for feature cards
 */
export const scrollRevealVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

/**
 * Button hover/tap animations
 */
export const buttonVariants: Variants = {
    hover: {
        scale: 1.05,
        y: -2,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
        }
    },
    tap: {
        scale: 0.98
    }
};

/**
 * Icon pulse animation
 */
export const iconPulseVariants: Variants = {
    initial: { scale: 1 },
    hover: {
        scale: [1, 1.1, 1],
        transition: {
            duration: 0.3,
            times: [0, 0.5, 1],
            ease: "easeInOut"
        }
    }
};

/**
 * Card lift animation
 */
export const cardHoverVariants: Variants = {
    rest: {
        y: 0,
        scale: 1,
        boxShadow: "0 8px 16px -4px rgba(0, 0, 0, 0.1)"
    },
    hover: {
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 40px -8px rgba(0, 150, 255, 0.2)",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
        }
    }
};

/**
 * Viewport animation settings
 * Triggers when element enters viewport
 */
export const viewportConfig = {
    once: true,
    margin: "-100px",
    amount: 0.3
};
