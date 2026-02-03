import { motion } from 'framer-motion';
import PhoneMockup from './PhoneMockup';

export default function AppShowcase() {
  return (
    <div className="relative mt-16 w-full max-w-[1200px] mx-auto px-4">
      {/* Desktop: 3 phones side-by-side */}
      <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 items-center justify-center">
        {/* Left: Profile screen (smaller, tilted) */}
        <div className="justify-self-end">
          <PhoneMockup
            imageSrc="/media/app-screen-profile.png"
            alt="AptusFIT Profile and Settings Screen"
            delay={0.6}
            position="left"
            className="w-[280px]"
          />
        </div>

        {/* Center: Workouts screen (primary, larger) */}
        <div className="justify-self-center">
          <PhoneMockup
            imageSrc="/media/app-screen-workouts.png"
            alt="AptusFIT Workout Training Plan"
            delay={0.8}
            position="center"
            className="w-[320px]"
          />
        </div>

        {/* Right: Progress screen (smaller, tilted) */}
        <div className="justify-self-start">
          <PhoneMockup
            imageSrc="/media/app-screen-progress.png"
            alt="AptusFIT Progress Tracking and Check-in"
            delay={1.0}
            position="right"
            className="w-[280px]"
          />
        </div>
      </div>

      {/* Mobile: Single phone, center */}
      <div className="md:hidden flex justify-center px-5">
        <PhoneMockup
          imageSrc="/media/app-screen-workouts.png"
          alt="AptusFIT Workout Training Plan"
          delay={0.8}
          position="center"
          className="w-[280px]"
        />
      </div>
    </div>
  );
}
