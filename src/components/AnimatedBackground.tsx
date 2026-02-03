import { motion } from 'framer-motion';

export default function AnimatedBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Background shapes with entrance animation only */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 1.2,
                    ease: "easeOut",
                    delay: 0.2
                }}
                className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 1.2,
                    ease: "easeOut",
                    delay: 0.4
                }}
                className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.2,
                    ease: "easeOut",
                    delay: 0.6
                }}
                className="absolute top-1/2 right-1/3 w-24 h-24 bg-accent/5 rounded-full blur-xl"
            />
        </div>
    );
}
