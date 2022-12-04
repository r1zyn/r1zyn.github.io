import type { NextComponent } from "../../lib/types";

import { scrollToElement } from "scroll-util";

export const Nav: NextComponent = (): JSX.Element => {
	return (
		<div className="w-full flex flex-row justify-between items-center fixed top-0 left-0 p-7 bg-inherit drop-shadow-md text-g2 dark:text-white font-made">
			<div className="flex flex-row items-center">
				<span
					className="font-bold text-xl hover:brightness-75"
					onClick={(): void => scrollToElement("header", "smooth")}>
					tncz<span className="text-p1">.dev()</span>
				</span>
			</div>

			<ul className="flex flex-row items-center list-none gap-x-10">
				<li
					className="cursor-pointer hover:text-p1 transition-all durartion-200 ease-in-out"
					onClick={(): void => scrollToElement("header", "smooth")}>
					home()
				</li>

				<li
					className="cursor-pointer hover:text-p1 transition-all durartion-200 ease-in-out"
					onClick={(): void => scrollToElement("about", "smooth")}>
					about()
				</li>
			</ul>
		</div>
	);
};
