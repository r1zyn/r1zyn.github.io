import type { GetStaticProps, NextPage } from "next";
import { Link } from "../components/core/Next";
import { MetaOptions, fetchMeta } from "../helpers/fetchMeta";
import type { MouseEvent } from "react";
import { Section } from "../components/base/Section";
import { SectionContainer } from "../components/base/SectionContainer";
import type { StaticProps } from "../lib/types";

import { scrollToElement } from "scroll-util";
import { urls } from "../lib/constants";

const Home: NextPage<MetaOptions> = (): JSX.Element => {
	return (
		<SectionContainer>
			<Section id="header">
				<div
					className="text-3xl md:text-7xl lg:text-8xl font-bold flex flex-col justify-center"
					data-aos="fade-down"
					data-aos-duration="1500">
					<h1
						className="text-gray-300 dark:text-white z-[5] hero glitch layers"
						data-text="tncz.dev()">
						<span>
							tncz<span className="text-p1">.dev()</span>
						</span>
					</h1>
					<h1
						className="text-gray-500 dark:text-gray-300 -mt-6 md:-mt-10 lg:-mt-14 z-[4] hero glitch layers"
						data-text="tncz.dev()">
						<span>
							tncz
							<span className="text-p1 brightness-75">
								.dev()
							</span>
						</span>
					</h1>
					<h1
						className="text-gray-600 -mt-6 md:-mt-10 lg:-mt-14 z-[3] hero glitch layers"
						data-text="tncz.dev()">
						<span>
							tncz
							<span className="text-p1 brightness-50">
								.dev()
							</span>
						</span>
					</h1>
					<h1
						className="text-gray-800 -mt-6 md:-mt-10 lg:-mt-14 z-[2] hero glitch layers"
						data-text="tncz.dev()">
						<span>
							tncz
							<span className="text-p1 brightness-25">
								.dev()
							</span>
						</span>
					</h1>
				</div>

				<p
					className="dark:text-white font-black"
					data-aos="fade-right"
					data-aos-duration="1000"
					data-aos-easing="ease-in-sine"
					data-aos-delay="1500">
					Full-stack developer, minimalist designer.
				</p>
			</Section>

			<Section id="about">
				<h1
					className="cursor-pointer text-3xl md:text-4xl lg:text-6xl font-bold text-g2 dark:text-white hero glitch layers"
					data-text="about.me()"
					data-aos="fade-down"
					data-aos-duration="1000">
					<span
						onMouseEnter={(e: MouseEvent): void =>
							e.currentTarget.classList.add("glow")
						}
						onMouseLeave={(e: MouseEvent): void =>
							e.currentTarget.classList.remove("glow")
						}
						onClick={(): void =>
							scrollToElement("story", "smooth")
						}>
						about<span className="text-p1">.me()</span>
					</span>
				</h1>

				<p
					className="cursor-pointer text-xl text-g2 dark:text-white"
					data-aos="fade-up"
					data-aos-duration="1000"
					onClick={(): void => scrollToElement("story", "smooth")}>
					{"<Story />"}
				</p>
			</Section>

			<Section id="story">
				<h1
					className="text-3xl md:text-4xl lg:text-6xl font-bold text-g2 dark:text-white hero glitch layers"
					data-text="The awakening of a new passion."
					data-aos="fade-down"
					data-aos-duration="1000">
					<span>
						The awakening of a new{" "}
						<span className="text-p1">passion.</span>
					</span>
				</h1>

				<p
					className="text-md font-light text-g2 dark:text-white"
					data-aos="fade-up"
					data-aos-duration="1000">
					I began my programming journey during New Zealand&apos;s
					first COVID-19 lockdown during March 2020, determined to
					become involved in Discord bot development out of curiosity.
					Ever since, I&apos;ve learnt full-stack web application,
					game and app development, as well as many new programming
					languages.
				</p>
			</Section>

			<Section id="matrix">
				<h1
					className="cursor-pointer text-3xl md:text-4xl lg:text-6xl font-bold text-g2 dark:text-white hero glitch layers"
					data-text="matrix.development()"
					data-aos="fade-down"
					data-aos-duration="1000">
					<span
						onMouseEnter={(e: MouseEvent): void =>
							e.currentTarget.classList.add("glow")
						}
						onMouseLeave={(e: MouseEvent): void =>
							e.currentTarget.classList.remove("glow")
						}
						onClick={(): void =>
							scrollToElement("matrix-about", "smooth")
						}>
						matrix<span className="text-p1">.development()</span>
					</span>
				</h1>

				<p
					className="text-md font-light text-g2 dark:text-white cursor-pointer"
					data-aos="fade-up"
					data-aos-duration="1000"
					onClick={(): void =>
						scrollToElement("matrix-about", "smooth")
					}>
					2020-present
				</p>
			</Section>

			<Section id="matrix-about">
				<h1
					className="text-3xl md:text-4xl lg:text-6xl font-bold text-g2 dark:text-white hero glitch layers"
					data-text="matrix.development()"
					data-aos="fade-down"
					data-aos-duration="1000">
					<span>
						Since 2020 I&apos;ve been a{" "}
						<span className="text-p1">director</span> @{" "}
						<a
							target="_blank"
							href={urls.matrix}
							rel="noopener noreferrer"
							className="underline hover:text-p1 transition-all duration-700 ease-in-out">
							Matrix Development
						</a>
					</span>
				</h1>

				<p
					className="text-md font-light text-g2 dark:text-white"
					data-aos="fade-up"
					data-aos-duration="1000">
					A small collective of imaginative developers aiming high,
					inspired by their love for programming.
				</p>
			</Section>
		</SectionContainer>
	);
};

export const getStaticProps: GetStaticProps = async (): Promise<
	StaticProps<MetaOptions>
> => {
	return {
		props: fetchMeta("home")
	};
};

export default Home;
