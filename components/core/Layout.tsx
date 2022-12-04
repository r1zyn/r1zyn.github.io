import { Meta, MetaProps } from "./Meta";
import { Nav } from "../base/Nav";
import type { NextComponent, PropsWithChildren } from "../../lib/types";

export type LayoutProps = PropsWithChildren<{
	meta: MetaProps;
}>;

export const Layout: NextComponent<LayoutProps> = ({
	children,
	meta
}: LayoutProps): JSX.Element => {
	return (
		<>
			<Meta {...meta} />

			<>
				<Nav />

				<main className="font-made bg-white dark:bg-g2">
					{children}
				</main>
			</>
		</>
	);
};
