/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'nohemi': ['Nohemi', 'sans-serif'],
                'mango-grotesque-black': ['Mango-Grotesque-Black', 'sans-serif'],
                'mango-grotesque-bold': ['Mango-Grotesque-Bold', 'sans-serif']
            }
        },
    },
    plugins: [],
}

