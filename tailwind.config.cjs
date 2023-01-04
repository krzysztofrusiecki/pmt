/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,svelte,ts}"],
	theme: {
		colors: {
			primary: {
				light: "#9999FF",
				DEFAULT: "#6666FF",
				dark: "#3333FF",
			},
			secondary: {
				green: {
					light: "#60DC9F",
					DEFAULT: "#35D284",
					dark: "#27B06C",
				},
				gray: {
					lighter: "#F2F2F2",
					light: "#CCCCCC",
					DEFAULT: "#B3B3B3",
					dark: "#999999",
					darker: "#4D4D4D",
				},
				red: {
					light: "#F46262",
					DEFAULT: "#F03434",
					dark: "#DF1010",
				},
			},
			black: "#000000",
			white: "#FFFFFF",
			yellow: "#FBFB57",
		},
		borderRadius: {
			sm: "3px",
			base: "5px",
			lg: "8px",
			xl: "12px",
		},
		fontSize: {
			sm: "12px",
			base: "14px",
			lg: "18px",
			xl: "24px",
			"2xl": "28px",
			"3xl": "36px",
			"4xl": "48px",
		},
		fontFamily: {
			inter: "Inter",
			"nunito-sans": "Nunito Sans",
		},
	},
	plugins: [],
};
