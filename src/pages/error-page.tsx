import { Link } from "react-router-dom";
import styles from "../styles/pages/errorPage.module.scss";

// Error page (404)
export default function ErrorPage() {
	return (
		<div className={styles.error}>
			<h1 className={styles.error__name}>404</h1>
			<p className={styles.error__message}>Oups ! La page que vous demandez n'existe pas.</p>
			<Link to={"/"}>Retourner sur la page d'accueil</Link>
		</div>
	);
}
