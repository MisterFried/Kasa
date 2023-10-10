import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import ErrorPage from "./pages/error-page";

// Global Styles
import "./styles/styles.scss";
// Module / local styles for the rootLayout element
import styles from "./styles/pages/rootLayout.module.scss";
import About from "./pages/about";

export default function App() {
	return (
		<>
			<header className={styles.header}>
				<img className={styles.image} src="../../icons/Kasa-mobile.svg"></img>
				<nav>
					<ul className={styles.list}>
						<li>
							<Link className={styles.navLink} to={"/"}>
								Accueil
							</Link>
						</li>
						<li>
							<Link className={styles.navLink} to={"/About"}>
								A Propos
							</Link>
						</li>
					</ul>
				</nav>
			</header>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>

			<footer className={styles.footer}>
				<img src="../../icons/Kasa-footer.svg"></img>
				<span className={styles.credits}>© 2020 Kasa. All rights reserved</span>
			</footer>
		</>
	);
}
