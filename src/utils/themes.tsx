import { CustomFlowbiteTheme } from 'flowbite-react';

export const buttonTheme: CustomFlowbiteTheme['button'] = {
	color: {
		primary:
			'bg-primary text-white capitalize text-text flex items-center flex-col justify-center w-full cursor-pointer focus:bg-focus hover:bg-hover whitespace-nowrap',

		secondary:
			'bg-secondary text-white capitalize text-text flex items-center justify-center flex-col w-full cursor-pointer focus:bg-focus hover:bg-hover whitespace-nowrap',

		icon: 'bg-primary text-white capitalize text-text flex items-center gap-4 justify-center w-full cursor-pointer focus:bg-focus hover:bg-hover',
	},

	disabled: 'cursor-not-allowed opacity-50',
	isProcessing: 'cursor-wait',

	outline: {
		on: 'w-full py-3 px-6 bg-white border border-primary text-gray-800 capitalize',
	},

	size: {
		xs: 'px-2 py-1 text-xs',
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-sm',
		lg: 'px-5 py-2.5 text-base',
		xl: 'px-6 py-3 text-base',
	},
};

export const inputTheme: CustomFlowbiteTheme['textInput'] = {
  base: "flex",
  field: {
    base: "flex w-full",
    input: {
      base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "p-2 text-sm",
        md: "p-2.5 text-sm",
        lg: "p-4 text-base"
      },
      colors: {
        primary: "bg-white border-gray-300 text-gray-900 focus:border-primary focus:ring-primary",
        success: "bg-white border-green-500 text-gray-900 focus:border-green-500 focus:ring-green-500",
        error: "bg-white border-red-500 text-gray-900 focus:border-red-500 focus:ring-red-500",
      },
    },
  }
};