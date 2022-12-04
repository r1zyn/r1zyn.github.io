import { Dispatch, SetStateAction, useEffect, useState } from "react";
import type { NextComponent } from "../../lib/types";

export const Track: NextComponent = (): JSX.Element => {
	const [isFirst, toggleFirst]: [boolean, Dispatch<SetStateAction<boolean>>] =
		useState<boolean>(true);

	useEffect((): void => {
		document.addEventListener("scroll", (): void => {
			if (
				window.scrollY <=
				(document.getElementById("header") as HTMLElement)
					.offsetHeight /
					2
			)
				toggleFirst(true);
			else toggleFirst(false);
		});
	});

	return (
		<>
			<div
				className="opacity-100 pointer-events-none fixed top-[50vh] bottom-0 z-[2] w-[0.5px] bg-p1 left-4 md:left-32 lg:left-40 flex justify-center"
				style={{
					background:
						"linear-gradient(180deg, rgba(53,0,211,1) 0%, rgba(53,0,211,1) 25%, rgba(53,0,211,1) 50%, rgba(15,15,15,0) 100%)",
					transform: "matrix(1, 0, 0, 1, 0, 0)",
					visibility: "inherit"
				}}>
				<div className="pointer-events-none fixed w-[9px] h-[9px] z-[2]">
					<div
						className="opacity-100 w-[9px] h-[9px] rounded-[3rem] bg-p1 border-[1px] border-solid border-p1"
						style={{
							visibility: "inherit"
						}}></div>
				</div>
			</div>

			{!isFirst ? (
				<div
					className="opacity-40 pointer-events-none fixed top-0 bottom-[50vh] z-[2] w-[0.5px] left-4 bg-p1 md:left-32 lg:left-40 flex justify-center extend"
					style={{
						background:
							"linear-gradient(360deg, rgba(53,0,211,1) 0%, rgba(53,0,211,1) 25%, rgba(53,0,211,1) 50%, rgba(15,15,15,0) 100%)",
						transform: "matrix(1, 0, 0, 1, 0, 0)",
						visibility: "inherit"
					}}></div>
			) : (
				<div
					className="opacity-40 pointer-events-none fixed top-0 bottom-[50vh] z-[2] w-[0.5px] left-4 bg-p1 md:left-32 lg:left-40 flex justify-center retract"
					style={{
						background:
							"linear-gradient(360deg, rgba(53,0,211,1) 0%, rgba(53,0,211,1) 25%, rgba(53,0,211,1) 50%, rgba(15,15,15,0) 100%)",
						transform: "matrix(1, 0, 0, 1, 0, 0)",
						visibility: "inherit"
					}}></div>
			) }
		</>
	);
};
