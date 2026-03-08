interface ButtonProps {
	className?: string;
	children?: React.ReactNode;
	ariaLabel?: string;
	dataType?: string;
	action?: () => void;
}

const Button = ({
	className,
	ariaLabel,
	dataType,
	action,
	children,
}: ButtonProps) => {
	return (
		<button
			className={className}
			aria-label={ariaLabel}
			data-type={dataType}
			onClick={action}
		>
			{children}
		</button>
	);
};

export default Button;
