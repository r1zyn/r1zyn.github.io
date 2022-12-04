import type { NextComponent, PropsWithChildren } from "../../lib/types";
import { Track } from "./Track";

export type SectionContainerProps = PropsWithChildren;

export const SectionContainer: NextComponent<SectionContainerProps> = ({
	children
}: SectionContainerProps): JSX.Element => {
	return (
		<div className="flex flex-col justify-center items-center w-full">
			{children}

			<Track />
		</div>
	);
};
