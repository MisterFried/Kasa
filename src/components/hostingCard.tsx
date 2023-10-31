import { HostingPropsInterface } from "../types/interfaces";
import styles from "../styles/components/hostingCard.module.scss";
import { Link } from "react-router-dom";

// Hosting card component
export default function Hosting(props: HostingPropsInterface) {
	const hosting = props.hosting;

	return (
		<article className={styles.hosting}>
			<img
				loading="lazy"
				className={styles.cover}
				src={hosting.cover}
				alt={`Photo de couverture du logement :${hosting.title}`}
			/>
			<div className={styles.gradient}></div>
			<Link to={`/hosting/${hosting.id}`}>
				<h2 className={styles.title}>{hosting.title}</h2>
			</Link>
		</article>
	);
}
