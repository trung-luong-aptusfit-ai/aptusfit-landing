import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/utils/animations';
import AppShowcase from './AppShowcase';

interface HeroSectionProps {
    className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
    return (
        <section className={`py-20 md:py-28 text-center bg-gradient-to-b from-surface to-background relative overflow-hidden ${className}`}>
            <div className="max-w-[1200px] mx-auto px-5 relative z-10">
                <div className="max-w-[800px] mx-auto">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0 }}
                        className="mb-8 flex justify-center"
                    >
                        <img
                            src="/aptusfit-logo.png"
                            alt="AptusFIT Logo"
                            className="h-12 md:h-16 w-auto"
                        />
                    </motion.div>

                    {/* Staggered text entrance */}
                    <motion.h1
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariants}
                        className="text-4xl md:text-5xl font-extrabold leading-tight -tracking-[0.02em] text-foreground mb-6"
                    >
                        Training that adapts to you.
                    </motion.h1>

                    <motion.p
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariants}
                        className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-4 max-w-[700px] mx-auto"
                    >
                        AptusFIT is a training system that adapts as you do. It uses your real workout data to adjust your plan over time, so you don't have to constantly rethink what to do next.
                    </motion.p>

                    <motion.p
                        custom={1.5}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariants}
                        className="text-base md:text-lg leading-relaxed text-muted-foreground font-semibold mb-8"
                    >
                        No noise, no hype; just steady, long term progress!
                    </motion.p>

                    {/* Coming Soon Message */}
                    <motion.div
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariants}
                        className="mt-10"
                    >
                        <div className="inline-block px-10 py-4 text-2xl font-bold text-accent">
                            Coming Soon
                        </div>
                    </motion.div>

                    {/* App Showcase */}
                    <AppShowcase />
                </div>
            </div>
        </section>
    );
}
