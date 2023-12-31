import styles from "../styles/components/dropdown.module.scss";
import { DropdownPropsInterface } from "../types/interfaces";
import { useState } from "react";

export default function Dropdown(props: DropdownPropsInterface) {
	const title = props.title;
	let content;

	// Two cases : content is a string --> return a string
	// content is an array of item --> return a <ul> with each item as an <li>
	if (typeof props.content === "string") {
		content = props.content;
	} else {
		content = (
			<ul>
				{props.content.map(element => (
					<li key={crypto.randomUUID()}>{element}</li>
				))}
			</ul>
		);
	}

	// Used to manage the open / close state of the dropdown
	const [isToggled, setIsToggled] = useState(false);

	// OnClick --> switch the state
	const toggleDropdown = () => setIsToggled(!isToggled);

	return (
		<div className={styles.dropdown}>
			<button
				className={isToggled ? `${styles.dropdown__title} ${styles.opened}` : styles.dropdown__title}
				onClick={toggleDropdown}
			>
				{title}
				<svg
					className={styles.dropdown__icon}
					width="20"
					height="21"
					viewBox="0 0 20 21"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9.19313 6.64477C9.63941 6.19849 10.3642 6.19849 10.8104 6.64477L17.6653 13.4996C18.1116 13.9459 18.1116 14.6707 17.6653 15.1169C17.219 15.5632 16.4943 15.5632 16.048 15.1169L10 9.06896L3.95203 15.1134C3.50575 15.5596 2.78099 15.5596 2.33471 15.1134C1.88843 14.6671 1.88843 13.9423 2.33471 13.496L9.18956 6.6412L9.19313 6.64477Z"
						fill="white"
					/>
				</svg>
			</button>
			<div className={styles.dropdown__content}>{content}</div>
		</div>
	);
}
