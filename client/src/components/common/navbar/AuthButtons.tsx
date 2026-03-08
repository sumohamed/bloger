import styles from "./authButtons.module.scss";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const AuthButtons = () => {
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate("/login");
	};
	const handleRegister = () => {
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
