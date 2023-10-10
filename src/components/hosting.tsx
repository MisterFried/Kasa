import { HostingPropsInterface } from "../types/interfaces";
import styles from "../styles/components/hosting.module.scss";

// Hosting card component
export default function Hosting(props: HostingPropsInterface) {
	const hosting = props.hosting;

	return (
		<article className={styles.hosting}>
			<img
				className={styles.cover}
				src={hosting.cover}
				alt={`Photo de couverture du logement :${hosting.title}`}
			/>
			<div className={styles.gradient}></div>
			<h2 className={styles.title}>{hosting.title}</h2>
		</article>
	);
}
