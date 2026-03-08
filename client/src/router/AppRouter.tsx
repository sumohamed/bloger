import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/common/navbar/Navbar";
import ProtectedRoute from "../components/common/protectedRoute/ProtectedRoute";

// Auth
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

// Main
import Home from "../pages/home/Home";
import Pricing from "../pages/pricing/Pricing";

// Product
import Marketplace from "../pages/marketplace/Marketplace";
import Features from "../pages/features/Features";
import Integrations from "../pages/integrations/Integrations";

// Company
import About from "../pages/about/About";
import Team from "../pages/team/Team";
import Blog from "../pages/blog/Blog";
import BlogPost from "../pages/blogPost/BlogPost";
import Careers from "../pages/careers/Careers";

// Connect
import Contact from "../pages/contact/Contact";
import Newsletter from "../pages/newsletter/Newsletter";

// Other
import Dashboard from "../pages/dashboard/Dashboard";
import NotFound from "../pages/notFound/NotFound";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				{/* Main */}
				<Route path="/" element={<Home />} />
				<Route path="/pricing" element={<Pricing />} />

				{/* Product */}
				<Route path="/marketplace" element={<Marketplace />} />
				<Route path="/features" element={<Features />} />
				<Route path="/integrations" element={<Integrations />} />

				{/* Company */}
				<Route path="/about" element={<About />} />
				<Route path="/team" element={<Team />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:id" element={<BlogPost />} />
				<Route path="/careers" element={<Careers />} />

				{/* Connect */}
				<Route path="/contact" element={<Contact />} />
				<Route path="/newsletter" element={<Newsletter />} />

				{/* Auth */}
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				{/* Protected */}
				<Route
					path="/dashboard"
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/>

				{/* 404 */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
