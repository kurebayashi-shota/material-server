// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Viteのソースコードを監視
    ],
    theme: {
      extend: {
        colors: {
          primary: '#F4A784',  // primary色の設定
          secondary: '#ffed4a',  // secondary色の設定
        },
      },
    },
    plugins: [],
  }
  