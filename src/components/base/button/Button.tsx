import { Button, ButtonProps } from 'flowbite-react';
import { FC } from 'react';
import { buttonTheme } from '../../../utils/themes';

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
