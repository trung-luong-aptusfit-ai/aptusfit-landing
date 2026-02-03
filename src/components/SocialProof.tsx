import { motion } from 'framer-motion';
import { Activity, Users, Globe } from 'lucide-react';

const metrics = [
    {
        icon: Activity,
        value: "10,000+",
        label: "Workouts tracked",
        delay: 0
    },
    {
        icon: Users,
        value: "500+",
        label: "Athletes training",
        delay: 0.1
    },
    {
        icon: Globe,
        value: "12",
        label: "Countries",
        delay: 0.2
    }
];

export default function SocialProof() {
    return (
        <section className="py-16 bg-surface/50 border-y border-border">
            <div className="max-w-[1200px] mx-auto px-5">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm text-muted-foreground mb-8 text-center uppercase tracking-wide font-semibold"
                >
                    Trusted by athletes worldwide
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: metric.delay, duration: 0.5 }}
                            className="flex flex-col items-center text-center p-6"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="mb-4 text-accent"
                            >
                                <metric.icon size={40} strokeWidth={1.5} />
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0.5 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: metric.delay + 0.2, type: "spring" }}
                                className="text-3xl md:text-4xl font-extrabold text-foreground mb-2"
                            >
                                {metric.value}
                            </motion.div>

                            <p className="text-base text-muted-foreground">
                                {metric.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Optional: Testimonial placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 max-w-[700px] mx-auto text-center"
                >
                    <blockquote className="text-lg italic text-muted-foreground">
                        "AptusFIT takes the guesswork out of training. My lifts have never been more consistent."
                    </blockquote>
                    <p className="mt-4 text-sm font-semibold text-foreground">
                        — Sarah K., Competitive Powerlifter
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
