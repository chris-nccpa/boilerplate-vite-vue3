module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            header: ['Oswald', 'Arial'],
            body: ['Oswald', 'Arial'],
        },
        extend: {
            backgroundColor: ['disabled'],
            textColor: ['disabled'],
            colors: ({ colors }) => ({
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                table: 'var(--table, --gray-light)',
                'table-active': 'var(--table-active, --secondary)',
                'nav-hover': 'var(--secondary)',
                header: 'var(--header)',
                footer: 'var(--footer)',
                'footer-logout': 'hsl(196deg 17% 12%)',
                'header-logout': 'hsl(200deg 16% 96%)',
                purple: {
                    DEFAULT: '#3e1761',
                    light: '#b2a2c0',
                    100: '#d8d1df',
                    200: '#b2a2c0',
                    300: '#8b74a0',
                    400: '#654581',
                    500: '#3e1761',
                    600: '#32124e',
                    700: '#250e3a',
                    800: '#190927',
                    900: '#0c0513',
                },
                teal: {
                    DEFAULT: 'hsl(186, 43%, 36%)',
                    light: 'hsl(186, 55%, 60%)',
                    dark: 'hsl(186, 50%, 30%)',
                    100: 'hsl(186, 50%, 95%)',
                    200: 'hsl(186, 50%, 90%)',
                    300: 'hsl(186, 50%, 80%)',
                    400: 'hsl(186, 50%, 40%)',
                    500: 'hsl(186, 43%, 36%)',
                    600: 'hsl(186, 45%, 30%)',
                    700: 'hsl(186, 45%, 28%)',
                    800: 'hsl(186, 45%, 25%)',
                    900: 'hsl(186, 45%, 15%)',
                },
                gold: {
                    DEFAULT: 'hsl(38, 60%, 43%)',
                    light: 'hsl(43, 64%, 49%)',
                    dark: '#59431a',
                    100: 'hsl(50, 100%, 95%)',
                    200: 'hsl(38, 70%, 75%)',
                    300: 'hsl(38, 65%, 60%)',
                    400: 'hsl(38, 65%, 50%)',
                    500: 'hsl(38, 60%, 48%)',
                    600: 'hsl(38, 60%, 45%)',
                    700: 'hsl(38, 63%, 40%)',
                    800: 'hsl(38, 65%, 30%)',
                    900: 'hsl(38, 65%, 20%)',
                },
                slate: {
                    100: '#F4F6F7',
                    200: 'hsl(200, 15.8%, 90%)',
                    300: '#E2E4E7',
                    400: 'hsl(200, 15.8%, 70%)',
                    500: 'hsl(200, 15.8%, 65%)',
                    600: 'hsl(200, 15.8%, 60%)',
                    700: 'hsl(200, 15.8%, 50%)',
                    800: 'hsl(200, 15.8%, 40%)',
                    900: 'hsl(200, 15.8%, 30%)',
                },
                gray: {
                    DEFAULT: 'var(--gray, #878787)',
                    dark: 'var(--gray-dark)',
                    100: '#e1e1e1',
                    200: '#c3c3c3',
                    300: '#a5a5a5',
                    400: '#878787',
                    500: '#696969',
                    600: '#545454',
                    700: '#3f3f3f',
                    800: '#2a2a2a',
                    900: '#151515',
                },
            }),
            screens: {
                lg: '860px',
                '8xl': '1400px',
                '9xl': '1600px',
            },
            keyframes: {
                pulse2: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.7 },
                },
                'pulse-full': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.2 },
                },
                'gradient-x': {
                    '0%': {
                        'background-position': '100% 0',
                    },
                    '100%': {
                        'background-position': '0 0',
                    },
                },
            },
            animation: {
                'pulse-less': 'pulse2 2s linear infinite',
                'pulse-full': 'pulse-full 2s linear infinite',
                'gradient-x': 'gradient-x 2s infinite linear',
            },
        },
    },
    plugins: [],
};