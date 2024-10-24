const flowbite = require('flowbite-react/tailwind');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
	theme: {
		extend: {
			colors: {
				primary: '#007BFF',
				border: '#707d86',
				focus: '#66b2ff',
				hover: '#66b2ff',
			},
		},
	},
	plugins: [flowbite.plugin()],
};
