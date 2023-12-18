/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        calculator: 'var(--color-calculator)',
        toggle: 'var(--color-toggle)',
        display: 'var(--color-display)',
        operatorKeyHover: 'var(--color-operatorKeyHover)',
        operatorKey: 'var(--color-operatorKey)',
        operatorKeyShadow: 'var(--color-operatorKeyShadow)',
        otherKeyHover: 'var(--color-otherKeyHover)',
        otherKey: 'var(--color-otherKey)',
        otherKeyShadow: 'var(--color-otherKeyShadow)',
        numberKeyHover: 'var(--color-numberKeyHover)',
        numberKey: 'var(--color-numberKey)',
        numberKeyShadow: 'var(--color-numberKeyShadow)',
        text: 'var(--color-text)',
        historialText: 'var(--color-historialText)',
        displayText: 'var(--color-displayText)',
        switch: 'var(--color-switch)',
      },
      fontSize: {
        '3xlPlus': '2rem',
      },
      letterSpacing: {
        widestPlus: '.25em',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
