import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../styles/components/hosting.module.scss";
import { HostingInterface } from "../types/interfaces";
import Dropdown from "./dropdown";
import Slideshow from "./slideshow";

export default function Hosting() {
	// Retrieve the ID in the URL
	const { id } = useParams();

	// State of the hosting data to refresh the content once the data is updated
	const [hostingData, setHostingData] = useState<HostingInterface>();

	// navigate function to redirect to the 404 error page when hosting's id is unknown
	const navigate = useNavigate();

	// useEffect triggers only once the component is rendered
	// Fetch the data and then update the hostingData state to trigger a rerender
	useEffect(() => {
		const fetchHostingData = async () => {
			const response = await fetch("/data/logements.json");
			const responseJSON: Array<HostingInterface> = await response.json();
			const filteredHostingData = responseJSON.find(hosting => hosting.id === id);

			if (typeof filteredHostingData !== "undefined") {
				setHostingData(filteredHostingData);
			} else {
				navigate("/404");
			}
		};

		fetchHostingData();
	}, []);

	if (typeof hostingData !== "undefined") {
		const rating = Number(hostingData.rating); // Stars
		const missingRating = 5 - rating; // Empty stars
		const ratingArray = Array.from({ length: rating });
		const missingRatingArray = Array.from({ length: missingRating });

		return (
			<section className={styles.hosting}>
				<Slideshow images={hostingData.pictures} />
				<div className={styles.content}>
					<h2 className={styles.title}>{hostingData.title}</h2>
					<h3 className={styles.location}>{hostingData.location}</h3>
					<div className={styles.tag_container}>
						{hostingData.tags.map(tag => (
							<span className={styles.tag} key={crypto.randomUUID()}>
								{tag}
							</span>
						))}
					</div>
					<div className={styles.ratings}>
						{ratingArray.map(() => (
							<svg
								key={crypto.randomUUID()}
								width="25"
								height="24"
								viewBox="0 0 25 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"
									fill="#FF6060"
								/>
							</svg>
						))}
						{missingRatingArray.map(() => (
							<svg
								key={crypto.randomUUID()}
								width="25"
								height="24"
								viewBox="0 0 25 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"
									fill="#E3E3E3"
								/>
							</svg>
						))}
					</div>
					<div className={styles.profil}>
						<span className={styles.profil__name}>{hostingData.host.name}</span>
						<img
							className={styles.profil__picture}
							src={hostingData.host.picture}
							alt={`Photo de profil de ${hostingData.host.name}`}
						/>
					</div>
				</div>
				<div className={styles.dropdown_container}>
					<Dropdown title="Description" content={hostingData.description}></Dropdown>
					<Dropdown title="Équipements" content={hostingData.equipments}></Dropdown>
				</div>
			</section>
		);
	}
}
