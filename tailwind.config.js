const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			serif: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.serif],
		},
	},
	plugins: [require('@tailwindcss/forms')],
	safelist: [
		{
			pattern: /col-span-(\d)/,
			variants: ['sm', 'md'],
		},
	],
};
