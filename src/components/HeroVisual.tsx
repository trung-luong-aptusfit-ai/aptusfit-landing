import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface DataPoint {
    week: number;
    value: number;
    adapted?: boolean;
}

const mockData: DataPoint[] = [
    { week: 1, value: 60 },
    { week: 2, value: 65 },
    { week: 3, value: 70 },
    { week: 4, value: 68, adapted: true }, // Adaptation point
    { week: 5, value: 73 },
    { week: 6, value: 78 },
    { week: 7, value: 76, adapted: true },
    { week: 8, value: 82 },
    { week: 9, value: 88 },
    { week: 10, value: 92 },
];

export default function HeroVisual() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const maxValue = Math.max(...mockData.map(d => d.value));
    const chartHeight = 300;
    const chartWidth = 600;
    const padding = 40;

    return (
        <div className="max-w-[600px] mx-auto">
            {/* Chart container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative p-8 bg-surface rounded-2xl border-2 border-border shadow-soft"
            >
                {/* Title */}
                <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="text-lg font-bold text-center mb-6 text-foreground"
                >
                    Your Progress Over Time
                </motion.h3>

                {/* SVG Chart */}
                <svg
                    width="100%"
                    height={chartHeight}
                    viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                    className="overflow-visible"
                >
                    {/* Y-axis */}
                    <line
                        x1={padding}
                        y1={padding}
                        x2={padding}
                        y2={chartHeight - padding}
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-border"
                    />

                    {/* X-axis */}
                    <line
                        x1={padding}
                        y1={chartHeight - padding}
                        x2={chartWidth - padding}
                        y2={chartHeight - padding}
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-border"
                    />

                    {/* Data line */}
                    {isVisible && mockData.map((point, index) => {
                        if (index === 0) return null;

                        const prevPoint = mockData[index - 1];
                        const x1 = padding + ((prevPoint.week - 1) / (mockData.length - 1)) * (chartWidth - 2 * padding);
                        const y1 = chartHeight - padding - ((prevPoint.value / maxValue) * (chartHeight - 2 * padding));
                        const x2 = padding + ((point.week - 1) / (mockData.length - 1)) * (chartWidth - 2 * padding);
                        const y2 = chartHeight - padding - ((point.value / maxValue) * (chartHeight - 2 * padding));

                        return (
                            <motion.line
                                key={`line-${index}`}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="rgb(0, 150, 255)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 1.2 + (index * 0.1),
                                    ease: "easeInOut"
                                }}
                            />
                        );
                    })}

                    {/* Data points */}
                    {mockData.map((point, index) => {
                        const x = padding + ((point.week - 1) / (mockData.length - 1)) * (chartWidth - 2 * padding);
                        const y = chartHeight - padding - ((point.value / maxValue) * (chartHeight - 2 * padding));

                        return (
                            <motion.g key={`point-${index}`}>
                                {/* Adaptation highlight */}
                                {point.adapted && (
                                    <motion.circle
                                        cx={x}
                                        cy={y}
                                        r="12"
                                        fill="none"
                                        stroke="rgb(0, 150, 255)"
                                        strokeWidth="2"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 0.5 }}
                                        transition={{ delay: 1.5 + (index * 0.1) }}
                                    />
                                )}

                                {/* Point */}
                                <motion.circle
                                    cx={x}
                                    cy={y}
                                    r="6"
                                    fill={point.adapted ? "rgb(0, 150, 255)" : "rgb(255, 255, 255)"}
                                    stroke="rgb(0, 150, 255)"
                                    strokeWidth="2"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.2 + (index * 0.1) }}
                                />
                            </motion.g>
                        );
                    })}

                    {/* Adaptation labels */}
                    {mockData.filter(p => p.adapted).map((point, index) => {
                        const x = padding + ((point.week - 1) / (mockData.length - 1)) * (chartWidth - 2 * padding);
                        const y = chartHeight - padding - ((point.value / maxValue) * (chartHeight - 2 * padding));

                        return (
                            <motion.text
                                key={`label-${index}`}
                                x={x}
                                y={y - 20}
                                textAnchor="middle"
                                fill="rgb(0, 150, 255)"
                                fontSize="12"
                                fontWeight="600"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2 + (index * 0.2) }}
                            >
                                Adapted
                            </motion.text>
                        );
                    })}
                </svg>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="mt-6 flex justify-center gap-6 text-sm text-muted-foreground"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-accent"></div>
                        <span>Performance</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2 border-accent bg-transparent"></div>
                        <span>Plan Adjusted</span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
