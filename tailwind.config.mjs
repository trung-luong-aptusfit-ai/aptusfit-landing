import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Aptos", "Inter", ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        xs: ["12px", { lineHeight: "20px" }],
        sm: ["16px", { lineHeight: "24px" }],
        base: ["18px", { lineHeight: "28px" }],
        lg: ["20px", { lineHeight: "28px" }],
        xl: ["22px", { lineHeight: "30px" }],
        "2xl": ["28px", { lineHeight: "36px" }],
        "3xl": ["34px", { lineHeight: "40px" }],
        "4xl": ["40px", { lineHeight: "48px" }],
        "5xl": ["54px", { lineHeight: "60px" }],
      },

      colors: {
        brand: {
          50: "rgb(var(--color-brand-50) / <alpha-value>)",
          100: "rgb(var(--color-brand-100) / <alpha-value>)",
          200: "rgb(var(--color-brand-200) / <alpha-value>)",
          300: "rgb(var(--color-brand-300) / <alpha-value>)",
          400: "rgb(var(--color-brand-400) / <alpha-value>)",
          500: "rgb(var(--color-brand-500) / <alpha-value>)",
          600: "rgb(var(--color-brand-600) / <alpha-value>)",
          700: "rgb(var(--color-brand-700) / <alpha-value>)",
          800: "rgb(var(--color-brand-800) / <alpha-value>)",
          900: "rgb(var(--color-brand-900) / <alpha-value>)",
          950: "rgb(var(--color-brand-950) / <alpha-value>)",
        },

        neutral: {
          50: "rgb(var(--color-neutral-50) / <alpha-value>)",
          100: "rgb(var(--color-neutral-100) / <alpha-value>)",
          200: "rgb(var(--color-neutral-200) / <alpha-value>)",
          300: "rgb(var(--color-neutral-300) / <alpha-value>)",
          400: "rgb(var(--color-neutral-400) / <alpha-value>)",
          500: "rgb(var(--color-neutral-500) / <alpha-value>)",
          600: "rgb(var(--color-neutral-600) / <alpha-value>)",
          700: "rgb(var(--color-neutral-700) / <alpha-value>)",
          800: "rgb(var(--color-neutral-800) / <alpha-value>)",
          900: "rgb(var(--color-neutral-900) / <alpha-value>)",
          950: "rgb(var(--color-neutral-950) / <alpha-value>)",
          1000: "rgb(var(--color-neutral-1000) / <alpha-value>)",
        },

        success: {
          50: "rgb(var(--color-success-50) / <alpha-value>)",
          100: "rgb(var(--color-success-100) / <alpha-value>)",
          200: "rgb(var(--color-success-200) / <alpha-value>)",
          300: "rgb(var(--color-success-300) / <alpha-value>)",
          400: "rgb(var(--color-success-400) / <alpha-value>)",
          500: "rgb(var(--color-success-500) / <alpha-value>)",
          600: "rgb(var(--color-success-600) / <alpha-value>)",
          700: "rgb(var(--color-success-700) / <alpha-value>)",
          800: "rgb(var(--color-success-800) / <alpha-value>)",
          900: "rgb(var(--color-success-900) / <alpha-value>)",
        },
        warning: {
          50: "rgb(var(--color-warning-50) / <alpha-value>)",
          100: "rgb(var(--color-warning-100) / <alpha-value>)",
          200: "rgb(var(--color-warning-200) / <alpha-value>)",
          300: "rgb(var(--color-warning-300) / <alpha-value>)",
          400: "rgb(var(--color-warning-400) / <alpha-value>)",
          500: "rgb(var(--color-warning-500) / <alpha-value>)",
          600: "rgb(var(--color-warning-600) / <alpha-value>)",
          700: "rgb(var(--color-warning-700) / <alpha-value>)",
          800: "rgb(var(--color-warning-800) / <alpha-value>)",
          900: "rgb(var(--color-warning-900) / <alpha-value>)",
        },
        error: {
          50: "rgb(var(--color-error-50) / <alpha-value>)",
          100: "rgb(var(--color-error-100) / <alpha-value>)",
          200: "rgb(var(--color-error-200) / <alpha-value>)",
          300: "rgb(var(--color-error-300) / <alpha-value>)",
          400: "rgb(var(--color-error-400) / <alpha-value>)",
          500: "rgb(var(--color-error-500) / <alpha-value>)",
          600: "rgb(var(--color-error-600) / <alpha-value>)",
          700: "rgb(var(--color-error-700) / <alpha-value>)",
          800: "rgb(var(--color-error-800) / <alpha-value>)",
          900: "rgb(var(--color-error-900) / <alpha-value>)",
        },

        pastel: {
          blue: "rgb(var(--color-pastel-blue) / <alpha-value>)",
          green: "rgb(var(--color-pastel-green) / <alpha-value>)",
          orange: "rgb(var(--color-pastel-orange) / <alpha-value>)",
          purple: "rgb(var(--color-pastel-purple) / <alpha-value>)",
          red: "rgb(var(--color-pastel-red) / <alpha-value>)",
          yellow: "rgb(var(--color-pastel-yellow) / <alpha-value>)",
        },

        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          secondary: "rgb(var(--surface-secondary) / <alpha-value>)",
          foreground: "rgb(var(--surface-foreground) / <alpha-value>)",
        },

        overlay: {
          DEFAULT: "rgb(var(--overlay) / <alpha-value>)",
          foreground: "rgb(var(--overlay-foreground) / <alpha-value>)",
        },

        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
          hover: "rgb(var(--accent-hover) / <alpha-value>)",
        },

        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },

        border: "rgb(var(--border) / <alpha-value>)",
        divider: "rgb(var(--divider) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",

        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },

        semantic: {
          success: {
            DEFAULT: "rgb(var(--semantic-success) / <alpha-value>)",
            foreground: "rgb(var(--semantic-success-foreground) / <alpha-value>)",
          },
          warning: {
            DEFAULT: "rgb(var(--semantic-warning) / <alpha-value>)",
            foreground: "rgb(var(--semantic-warning-foreground) / <alpha-value>)",
          },
          error: {
            DEFAULT: "rgb(var(--semantic-error) / <alpha-value>)",
            foreground: "rgb(var(--semantic-error-foreground) / <alpha-value>)",
          }
        },

        /* Button Text Colors */
        "button-text": {
          primary: "rgb(var(--color-button-primary-text) / <alpha-value>)",
          secondary: "rgb(var(--color-button-secondary-text) / <alpha-value>)",
          ghost: "rgb(var(--color-button-ghost-text) / <alpha-value>)",
          danger: "rgb(var(--color-button-danger-text) / <alpha-value>)",
          pastel: "rgb(var(--color-button-pastel-text) / <alpha-value>)",
        },

        /* Tab Bar */
        "tab-bar": {
          background: "rgb(var(--color-tab-bar-background) / <alpha-value>)",
          border: "rgb(var(--color-tab-bar-border) / <alpha-value>)",
          indicator: "rgb(var(--color-tab-bar-indicator) / <alpha-value>)",
          active: "rgb(var(--color-tab-bar-active) / <alpha-value>)",
          inactive: "rgb(var(--color-tab-bar-inactive) / <alpha-value>)",
        },

        /* Coach Button Gradient */
        "brand-gradient": {
          start: "rgb(var(--color-brand-gradient-start) / <alpha-value>)",
          end: "rgb(var(--color-brand-gradient-end) / <alpha-value>)",
        }
      },

      borderRadius: {
        card: "var(--radius-card)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        pill: "var(--radius-pill)",
      },

      boxShadow: {
        soft: "0 8px 16px -4px rgba(0, 0, 0, 0.1)", // Approximation of soft shadow
        glow: "0 8px 16px rgba(0, 150, 255, 0.3)",
      },

      opacity: {
        disabled: "0.4",
        hover: "0.8",
      }
    },
  },
  plugins: [],
};
