import { Link } from "../core/Next";
import type { NextComponent } from "../../lib/types";

export const Nav: NextComponent = (): JSX.Element => {
	return (
		<div className="w-full flex flex-row justify-between items-center fixed top-0 left-0 p-7 bg-inherit drop-shadow-md text-g2 dark:text-white font-made">
			<div className="flex flex-row items-center">
				<Link href="/">
					<span className="font-bold text-xl hover:brightness-75">
						tncz<span className="text-p1">.dev()</span>
					</span>
				</Link>
			</div>

			<ul className="flex flex-row items-center list-none gap-x-10">
				<Link href="/">
					<li className="brightness-75 cursor-pointer">home()</li>
				</Link>

				<Link href="/about">
					<li className="hover:brightness-75 cursor-pointer">
						about()
					</li>
				</Link>
			</ul>
		</div>
	);
};
