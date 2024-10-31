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
			height: {
				'screen-minus-16.8': 'calc(100vh - 16.8rem)',
			},
			width: {
				'preview-image': 'calc(100% + 32px)',
			},

			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
			backgroundColor: {
				btn: '#f4f2ee',
				preview: '#f4f2ee',
			},

			borderColor: {
				border: '#e6e6e6',
				preview: '#e1dedc',
			},

			borderRadius: {
				b1: '0.8rem',
			},

			boxShadow: {
				custom: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
			},
		},
	},
	plugins: [flowbite.plugin(), '@tailwindcss/typography'],
};
