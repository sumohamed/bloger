interface NavigationProps {
	className?: string;
	children?: React.ReactNode;
}
const Navigation = ({ className, children }: NavigationProps) => {
	return (
		<nav aria-label="Main Navigation" className={className}>
			{children}
		</nav>
	);
};

export default Navigation;
