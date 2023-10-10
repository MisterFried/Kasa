import { useEffect, useState } from "react";
import Hosting from "../components/hosting";
import { HostingInterface } from "../types/interfaces";
import styles from "../styles/pages/home.module.scss";

//Homepage
export default function Home() {
	// State of the hosting list to refresh the content once the list is updated
	const [hostingList, setList] = useState<Array<HostingInterface>>([]);

	// useEffect triggers only once the component is rendered
	// Fetch the data and then update the hostingList state
	useEffect(() => {
		const fetchHostingData = async () => {
			const response = await fetch("/data/logements.json");
			const responseJSON = await response.json();
			setList(responseJSON);
		};

		fetchHostingData();
	}, []);

	return (
		<section className={styles.container}>
			<div className={styles.heading}>
				<h1 className={styles.header}>
					<span>Chez vous,</span>
					<span>partout et ailleurs</span>
				</h1>
			</div>

			<div className={styles.hosting_List}>
				{hostingList.map(hosting => (
					<Hosting key={hosting.id} hosting={hosting} />
				))}
			</div>
		</section>
	);
}
