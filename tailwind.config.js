module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      light: '#fff',
      dark: '#000',
      blue: {
        light: '#1685ea',
        DEFAULT: '#0063bd',
        dark: '#0e2f4e',
        grey: '#3b4e6c',
        500: '#4299e1',
        700: '#2b6cb0'
      },
      grey: {
        200: '#d3d3d3'
      },
      yellow: {
        DEFAULT: '#edae49'
      },
      green: {
        DEFAULT: '#129490'
      },
      red: {
        light: '#ff7e7e'
      }
    },
    extend: {
      animation: {
        oscilliate: 'oscilliate 1.5s ease-in-out infinite'
      },
      keyframes: {
        oscilliate: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' }
        }
      },
      rotate: {
        135: '135deg'
      }
    }
  }
}
