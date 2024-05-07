/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'black': '0a0a0a',
            cel: {
                0:'#5AA7A9',
                1: '#4B8B8D',
                2: '#3C6F71',
                3: '#2B5051'
            },
            blue: {
                0: '#34607F',
                1: '#294B64',
                2: '#1D3546',
            },
            cream: '#D9D9D9',
            red: '#ED2658',
            white: '#ffffff',
            orange: '#ED6842',
            black: '#000000',
            jk: '#f18c79',
            cerceta: '#00787C',
            ag: '#ABB1B0',
            dark: '#353535',
            grey: '#eaeaea',
            yellow: '#ffdd00'
        },
        extend: {
            fontFamily: {
                'nohemi': ['Nohemi', 'sans-serif'],
                'fleuron': ['Fleuron', 'sans-serif'],
                'mango-grotesque-black': ['Mango-Grotesque-Black', 'sans-serif'],
                'mango-grotesque-bold': ['Mango-Grotesque-Bold', 'sans-serif'],
                'mango-grotesque-medium': ['Mango-Grotesque-Medium', 'sans-serif'],
                'nohemi-bold': ['Nohemi-Bold', 'sans-serif']
            }
        },
    },
    plugins: [],
}

