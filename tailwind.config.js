/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html"],
	theme: {
		extend: {
			colors: {
				VeryLightGrayishBlue: "hsl(240, 78%, 98%)",
				LightGrayishBlue: "hsl(234, 14%, 74%)",
				GrayishBlue: "hsl(233, 13%, 49%)",
				DarkGrayishBlue: "hsl(232, 13%, 33%)",

				gradientFrom: "hsl(236, 72%, 79%)",
				gradientTo: "hsl(237, 63%, 64%)",
			},
			backgroundImage: {
				bgTop: "url('./images/bg-top.svg')",
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			spacing: {
				"1px": "1px",
				"2px": "2px",
			},
		},
	},
	plugins: [],
};
