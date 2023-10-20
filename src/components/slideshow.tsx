import { SlideshowPropsInterface } from "../types/interfaces";
import styles from "../styles/components/slideshow.module.scss";
import { useState } from "react";

export default function Slideshow(props: SlideshowPropsInterface) {
	// Array containing images url
	const images = props.images;
	const imagesNumber = images.length - 1;

	// Update the component each time the currently displayed images url changes
	const [nextImage, setNextImage] = useState(0);

	const nextImageFunction = () => (nextImage === imagesNumber ? setNextImage(0) : setNextImage(nextImage + 1));
	const previousImageFunction = () => (nextImage === 0 ? setNextImage(imagesNumber) : setNextImage(nextImage - 1));

	return (
		<div className={styles.container}>
			<img className={styles.image} src={images[nextImage]} alt="Image du logement" />
			<button onClick={previousImageFunction} className={styles.previous__button}>
				<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M9.19313 6.64477C9.63941 6.19849 10.3642 6.19849 10.8104 6.64477L17.6653 13.4996C18.1116 13.9459 18.1116 14.6707 17.6653 15.1169C17.219 15.5632 16.4943 15.5632 16.048 15.1169L10 9.06896L3.95203 15.1134C3.50575 15.5596 2.78099 15.5596 2.33471 15.1134C1.88843 14.6671 1.88843 13.9423 2.33471 13.496L9.18956 6.6412L9.19313 6.64477Z"
						fill="white"
					/>
				</svg>
			</button>
			<button onClick={nextImageFunction} className={styles.next__button}>
				<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M9.19313 6.64477C9.63941 6.19849 10.3642 6.19849 10.8104 6.64477L17.6653 13.4996C18.1116 13.9459 18.1116 14.6707 17.6653 15.1169C17.219 15.5632 16.4943 15.5632 16.048 15.1169L10 9.06896L3.95203 15.1134C3.50575 15.5596 2.78099 15.5596 2.33471 15.1134C1.88843 14.6671 1.88843 13.9423 2.33471 13.496L9.18956 6.6412L9.19313 6.64477Z"
						fill="white"
					/>
				</svg>
			</button>
			<span className={styles.indicator}>{`${nextImage + 1}/${imagesNumber + 1}`}</span>
		</div>
	);
}
