import styles from "../styles/pages/rootLayout.module.scss";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<img className={styles.footer__image} src="../../icons/Kasa-footer.svg" alt="Logo KASA"></img>
			<span className={styles.credits}>© 2020 Kasa. All rights reserved</span>
		</footer>
	);
}
