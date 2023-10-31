import { Link } from "react-router-dom";
import styles from "../styles/pages/rootLayout.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<img className={styles.header__image} src="../../icons/Kasa-mobile.svg" alt="Logo KASA"></img>
			<nav>
				<ul className={styles.list}>
					<li>
						<Link className={styles.navLink} to={"/"}>
							Accueil
						</Link>
					</li>
					<li>
						<Link className={styles.navLink} to={"/about"}>
							A Propos
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
