import type { NextComponent, Props } from "../../lib/types";

import { hexToRgb } from "../../lib/util";

export type SkillProps = Props<{
	color: string;
	percentage: number;
	name: string;
}>;

export const Skill: NextComponent<SkillProps> = ({
	color,
	percentage,
	name
}: SkillProps): JSX.Element => {
	return (
		<div className="w-full h-6 bg-gray-300 flex flex-row justify-center items-center">
			<div
				className="h-full w-32 flex justify-center items-center"
				style={{
					backgroundColor: color
				}}>
				<span className="text-white text-xs">{name}</span>
			</div>

			<div className="w-full h-full">
				<div
					className="h-full flex justify-center items-center"
					style={{
						backgroundColor: `rgba(${Object.values(
							hexToRgb(color)!
						).join(", ")}, 0.7)`,
						width: `calc(${percentage}% + 3rem)`
					}}></div>
			</div>

			<span className="text-g1 text-xs pr-2 w-10">{percentage}%</span>
		</div>
	);
};
