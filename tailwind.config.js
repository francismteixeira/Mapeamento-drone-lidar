// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 60s linear infinite',
      },
    },
  },

  theme: [
    "./src/**/*.{js,jsx,ts,tsx}", // ajuste de acordo com seu projeto
  ],
  theme: {
    extend: {
      colors: {
        'primario': "#FF0034",
        secundario: "#1F2937",
        destaque: "#FF5733",
        fundo: "#F3F4F6",
        texto: "#333333",
        // Adicione quantas cores quiser
      },
    },
  },
  plugins: [],
};