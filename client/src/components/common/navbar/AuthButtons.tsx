import styles from "./authButtons.module.scss";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

interface AuthButtonsProps {
	onClose: () => void;
}

const AuthButtons = ({ onClose }: AuthButtonsProps) => {
	const navigate = useNavigate();

	const handleLogin = () => {
		onClose();
		navigate("/login");
	};
	const handleRegister = () => {
		onClose();
		navigate("/register");
	};

	return (
		<div className={styles["auth-btns"]}>
			<Button className={styles.login} action={handleLogin}>
				Login
			</Button>
			<Button className={styles.signup} action={handleRegister}>
				Sign Up
			</Button>
		</div>
	);
};

export default AuthButtons;
