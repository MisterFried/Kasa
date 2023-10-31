import Dropdown from "../components/dropdown";
import styles from "../styles/pages/about.module.scss";
import about from "../../public/data/about.json";

export default function About() {
	return (
		<section className={styles.about}>
			<img className={styles.image} src="/images/About.webp" alt="Illustration de la section A propos" />
			<div className={styles.container}>
				{about.map(dropdown => (
					<Dropdown key={dropdown.id} title={dropdown.title} content={dropdown.content} />
				))}
			</div>
		</section>
	);
}
