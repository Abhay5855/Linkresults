import { Button, ButtonProps, CustomFlowbiteTheme } from 'flowbite-react';
import { FC } from 'react';

export const ButtonWrapper: FC<ButtonProps> = ({
	color,
	children,
	type,
	onClick,
	pill,
	outline,
	size,
	isProcessing,
	disabled,
}) => {
	const buttonTheme: CustomFlowbiteTheme['button'] = {
		color: {
			primary:
				'text-white bg-primary hover:bg-hover w-full py-1 px-4  md:py-2 px-6  focus:bg-focus  lg:py-2 px-6 xl:py-2 px-6  2xl:py-2 px-6 capitalize',
		},
		outline: {
			on: 'w-full py-3 px-6 bg-white border border-primary text-gray-800 capitalize',
		},
	};

	return (
		<>
			<Button
				color={color}
				pill={pill}
				type={type}
				onClick={onClick}
				outline={outline}
				size={size}
				isProcessing={isProcessing}
				disabled={disabled}
				theme={buttonTheme}
			>
				{children}
			</Button>
		</>
	);
};
