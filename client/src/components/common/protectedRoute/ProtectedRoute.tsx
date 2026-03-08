import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
	children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const isLoggedIn = false;

	if (!isLoggedIn) {
		return <Navigate to="/login" />;
	}
	return children;
};

export default ProtectedRoute;
