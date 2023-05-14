/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                primary: '#00040f',
                secondary: '#00f6ff',
                devBlue: '#3F00F3',
                devYellow: '#ffff00',
                dimWhite: '#D9D9D9',
                dimBlue: 'rgba(9, 151, 124, 0.1)',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
        },
        screens: {
            xs: { max: '480px' },
            ss: { max: '620px' },
            sm: { max: '768px' },
            md: { max: '1060px' },
            lg: { max: '1200px' },
            xl: { max: '1700px' },
        },
    },
    plugins: [],
};
