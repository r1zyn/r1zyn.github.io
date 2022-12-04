import type { NextComponent, PropsWithChildren } from "../../lib/types";

export type SectionProps = PropsWithChildren;

export const Section: NextComponent<SectionProps> = ({
	children,
	id
}: SectionProps): JSX.Element => {
	return (
		<div className="w-full h-screen" id={id}>
			<div className="flex flex-col gap-y-7 section w-full h-full pt-[36vh] pl-[12rem] pr-4">
				{children}
			</div>
		</div>
	);
};
