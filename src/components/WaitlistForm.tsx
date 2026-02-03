import { motion } from 'framer-motion';
import { useState } from 'react';
import confetti from 'canvas-confetti';

export default function WaitlistForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call (replace with actual endpoint)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Success
        setStatus('success');
        setMessage('🎉 You\'re on the list! Check your email for confirmation.');
        setEmail('');

        // Trigger confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#0096ff', '#33aaff', '#66c2ff']
        });

        // Reset after 5 seconds
        setTimeout(() => {
            setStatus('idle');
            setMessage('');
        }, 5000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="max-w-[500px] mx-auto"
        >
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 justify-center" aria-label="Email waitlist signup form" role="form">
                <motion.input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading' || status === 'success'}
                    whileFocus={{ scale: 1.02, borderColor: 'rgb(0, 150, 255)' }}
                    aria-label="Email address"
                    className="flex-1 min-w-[250px] px-5 py-4 text-base border-2 border-border rounded-xl outline-none transition-colors duration-200 focus:border-accent text-foreground bg-input disabled:opacity-50"
                />
                <motion.button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 text-base font-semibold text-button-text-primary bg-accent rounded-xl whitespace-nowrap transition-all duration-200 hover:bg-accent-hover hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed md:w-auto w-full"
                >
                    {status === 'loading' ? 'Joining...' : status === 'success' ? '✓ Joined!' : 'Join Waitlist'}
                </motion.button>
            </form>

            {/* Success/Error message */}
            {message && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mt-4 text-center text-sm ${status === 'success' ? 'text-semantic-success' : 'text-semantic-error'}`}
                >
                    {message}
                </motion.p>
            )}

            {/* Trust signal */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-center text-xs text-muted-foreground"
            >
                🔒 We respect your inbox. No spam, ever.
            </motion.p>
        </motion.div>
    );
}
