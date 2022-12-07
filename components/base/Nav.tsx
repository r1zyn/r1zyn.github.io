import {
	Dispatch,
	MouseEvent,
	SetStateAction,
	useEffect,
	useState
} from "react";
import type { NextComponent } from "../../lib/types";

import { scrollToElement } from "scroll-util";
import { handleClick } from "../../helpers/handleClick";
import { sectionInView } from "../../helpers/sectionInView";

export const Nav: NextComponent = (): JSX.Element => {
	const [sectionVisible, setSection]: [
		string,
		Dispatch<SetStateAction<string>>
	] = useState<string>("header");

	useEffect((): void => {
		const sections: string[] = ["header", "about", "skills"];

		document.addEventListener("scroll", (): void => {
			const e: string | undefined = sections.find(
				(section: string): boolean =>
					sectionInView(
						document.getElementById(section) as HTMLElement
					)
			);

			if (e) setSection(e);
		});
	});

	return (
		<div className="w-full flex flex-row justify-between items-center fixed top-0 left-0 pt-7 pl-7 pr-7 pb-12 text-g2 dark:text-white font-made transition duration-700 ease-in-out z-[9999] nav">
			<div className="flex flex-row items-center">
				<span
					className="font-bold text-xl hover:brightness-75"
					onClick={(): void => scrollToElement("header", "smooth")}>
					tncz<span className="text-p1">.dev()</span>
				</span>
			</div>

			<ul className="hidden lg:flex flex-row items-center list-none gap-x-10">
				<li
					className={`${
						sectionVisible === "header" && "text-p1"
					} cursor-pointer hover:text-p1 transition-all duration-200 ease-in-out`}
					onClick={(e: MouseEvent): void => handleClick(e, "header")}>
					home()
				</li>

				<li
					className={`${
						sectionVisible === "about" && "text-p1"
					} cursor-pointer hover:text-p1 transition-all duration-200 ease-in-out`}
					onClick={(e: MouseEvent): void => handleClick(e, "about")}>
					about()
				</li>

				<li
					className={`${
						sectionVisible === "skills" && "text-p1"
					} cursor-pointer hover:text-p1 transition-all duration-200 ease-in-out`}
					onClick={(e: MouseEvent): void => handleClick(e, "skills")}>
					skills()
				</li>
			</ul>
		</div>
	);
};
