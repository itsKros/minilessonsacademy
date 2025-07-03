export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}', 
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          from: { opacity: 0, transform: 'translateY(0.25rem)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
