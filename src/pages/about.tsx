import Dropdown from "../components/dropdown";
import styles from "../styles/pages/about.module.scss";

export default function About() {
	const dropdownList = [
		{
			title: "Fiabilité",
			content:
				"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
			id: 1,
		},
		{
			title: "Respect",
			content:
				"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
			id: 2,
		},
		{
			title: "Service",
			content:
				"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
			id: 3,
		},
		{
			title: "Sécurité",
			content:
				"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
			id: 4,
		},
	];

	return (
		<section className={styles.about}>
			<img className={styles.image} src="/images/About.png" alt="Illustration de la section A propos" />
			<div className={styles.container}>
				{dropdownList.map(dropdown => (
					<Dropdown key={dropdown.id} title={dropdown.title} content={dropdown.content} />
				))}
			</div>
		</section>
	);
}
