import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { scrollRevealVariants, cardHoverVariants, iconPulseVariants, viewportConfig } from '@/utils/animations';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    delay?: number;
    isHighlighted?: boolean;
}

export default function FeatureCard({
    icon: Icon,
    title,
    description,
    delay = 0,
    isHighlighted = false
}: FeatureCardProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={scrollRevealVariants}
            transition={{ delay }}
            whileHover="hover"
            className="flex flex-col items-center text-center p-8 rounded-card bg-surface transition-all duration-200 relative"
            role="article"
            aria-labelledby={`feature-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
            {/* Highlight border for middle card */}
            {isHighlighted && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute inset-0 rounded-card border-2 border-accent/20 pointer-events-none"
                />
            )}

            {/* Animated icon */}
            <motion.div
                variants={iconPulseVariants}
                initial="initial"
                whileHover="hover"
                className="mb-4 text-accent"
            >
                <Icon size={48} strokeWidth={1.5} />
            </motion.div>

            <h3 id={`feature-${title.replace(/\s+/g, '-').toLowerCase()}`} className="text-xl font-bold mb-3 text-foreground">{title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">{description}</p>

            {/* Hover shadow effect */}
            <motion.div
                variants={cardHoverVariants}
                className="absolute inset-0 rounded-card pointer-events-none"
                style={{ zIndex: -1 }}
            />
        </motion.div>
    );
}
