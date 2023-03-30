/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		fontFamily: {
			serif: ["Fraunces", "serif"],
			sans: ["Montserrat", "sans-serif"],
		},
		extend: {
			colors: {
				cyan: "hsl(158, 36%, 37%)",
				cream: "hsl(30, 38%, 92%)",
				blue: {
					dark: "hsl(212, 21%, 14%)",
					gray: "hsl(228, 12%, 48%)",
				},
			},
		},
	},
	plugins: [],
};
