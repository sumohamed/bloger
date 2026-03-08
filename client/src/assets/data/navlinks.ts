type NavCategoryTitle = "Product" | "Company" | "Connect";

interface NavCategory {
	id: string;
	title: NavCategoryTitle;
	links: NavLink[];
}

interface NavLink {
	label: string;
	path: string;
	external?: boolean;
}

export const navLinks: NavCategory[] = [
	{
		id: "C1",
		title: "Product",
		links: [
			{ label: "Overview", path: "/" },
			{ label: "Pricing", path: "/pricing" },
			{ label: "Marketplace", path: "/marketplace" },
			{ label: "Features", path: "/features" },
			{ label: "Integrations", path: "/integrations" },
		],
	},
	{
		id: "C2",
		title: "Company",
		links: [
			{ label: "About", path: "/about" },
			{ label: "Team", path: "/team" },
			{ label: "Blog", path: "/blog" },
			{ label: "Careers", path: "/careers" },
		],
	},
	{
		id: "C3",
		title: "Connect",
		links: [
			{ label: "Contact", path: "/contact" },
			{ label: "Newsletter", path: "/newsletter" },
			{ label: "LinkedIn", path: "https://linkedin.com", external: true },
		],
	},
];
