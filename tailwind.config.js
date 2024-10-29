const flowbite = require('flowbite-react/tailwind');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
	theme: {
		extend: {
			colors: {
				primary: '#6941C6',
				secondary: '6941C6',
				border: '#707d86',
				focus: '#7A59D8',
				hover: '#5B36B0',
				text: '#F9F5FF',
			},

			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},

			boxShadow: {
				custom: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
			},
		},
	},
	plugins: [flowbite.plugin()],
};
