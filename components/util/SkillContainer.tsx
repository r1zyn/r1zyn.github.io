import type { NextComponent, PropsWithChildren } from "../../lib/types";

export type SkillContainerProps = PropsWithChildren<{
	title: string;
}>;

export const SkillContainer: NextComponent<SkillContainerProps> = ({
	children,
	title
}: SkillContainerProps): JSX.Element => {
	return (
		<div
			className="w-full h-max flex flex-col justify-center items-start gap-y-4"
			data-aos="fade-down"
			data-aos-duration="1000">
			<h1 className="text-2xl font-black uppercase">{title}</h1>
			<div className="w-full h-max flex flex-col justify-center items-evenly gap-y-2">
				{children}
			</div>
		</div>
	);
};
