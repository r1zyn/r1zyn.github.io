import type { GetStaticProps, NextPage } from "next";
import { MetaOptions, fetchMeta } from "../helpers/fetchMeta";
import type { MouseEvent } from "react";
import { Section } from "../components/base/Section";
import { SectionContainer } from "../components/base/SectionContainer";
import { Skill } from "../components/util/Skill";
import { SkillContainer } from "../components/util/SkillContainer";
import type { StaticProps } from "../lib/types";

import { scrollToElement } from "scroll-util";
import { urls } from "../lib/constants";

const Home: NextPage<MetaOptions> = (): JSX.Element => {
	return (
		<SectionContainer>
			<Section id="header">
				<div
					className="text-[3.25rem] md:text-7xl lg:text-8xl font-bold flex flex-col justify-center"
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
						className="text-gray-500 dark:text-gray-300 -mt-12 md:-mt-10 lg:-mt-14 z-[4] hero glitch layers"
						data-text="tncz.dev()">
						<span>
							tncz
							<span className="text-p1 brightness-75">
								.dev()
							</span>
						</span>
					</h1>
					<h1
						className="text-gray-600 -mt-12 md:-mt-10 lg:-mt-14 z-[3] hero glitch layers"
						data-text="tncz.dev()">
						<span>
							tncz
							<span className="text-p1 brightness-50">
								.dev()
							</span>
						</span>
					</h1>
					<h1
						className="text-gray-800 -mt-12 md:-mt-10 lg:-mt-14 z-[2] hero glitch layers"
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
					className="text-g1 dark:text-white font-black text-sm lg:text-lg"
					data-aos="fade-right"
					data-aos-duration="1000"
					data-aos-easing="ease-in-sine"
					data-aos-delay="1500">
					Full-stack website, application and Discord bot developer.
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
					I began my programming journey during a COVID-19 lockdown
					during March 2020, determined to become involved in Discord
					bot development out of curiosity. Ever since, I&apos;ve
					learnt full-stack web application, game and app development,
					as well as many new programming languages, frameworks and
					tools.
				</p>
			</Section>

			<Section id="matrix">
				<h1
					className="cursor-pointer text-3xl md:text-4xl lg:text-6xl font-bold text-g2 dark:text-white hero glitch layers"
					data-text={'matrix("director")'}
					data-aos="fade-down"
					data-aos-duration="1000">
					<span
						className="flex flex-row flex-wrap items-center"
						onMouseEnter={(e: MouseEvent): void =>
							e.currentTarget.classList.add("glow")
						}
						onMouseLeave={(e: MouseEvent): void =>
							e.currentTarget.classList.remove("glow")
						}
						onClick={(): void =>
							scrollToElement("matrix-about", "smooth")
						}>
						matrix(<span className="text-p1">2020, Date.now()</span>
						)
					</span>
				</h1>

				<p
					className="cursor-pointer text-xl text-g2 dark:text-white"
					data-aos="fade-up"
					data-aos-duration="1000"
					onClick={(): void =>
						scrollToElement("matrix-about", "smooth")
					}>
					{"<Organisation />"}
				</p>
			</Section>

			<Section id="matrix-about">
				<h1
					className="text-3xl md:text-4xl lg:text-6xl font-bold text-g2 dark:text-white hero glitch layers"
					data-text="Since 2020 I've been a director @ Matrix Development"
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

			<Section>
				<p
					className="text-md font-light text-g2 dark:text-white"
					data-aos="fade-down"
					data-aos-duration="1000">
					Throughout the years we&apos;ve supported
				</p>

				<h1
					className="text-3xl md:text-4xl lg:text-6xl font-bold text-g2 dark:text-white hero glitch layers"
					data-text="the growth and development of developers of all kinds"
					data-aos="fade-down"
					data-aos-duration="1000">
					<span className="text-p1">
						the growth and development of developers of all kinds
					</span>
				</h1>

				<p
					className="text-md font-light text-g2 dark:text-white"
					data-aos="fade-up"
					data-aos-duration="1000">
					and helped servers grow with our products.
				</p>
			</Section>

			<Section>
				<p
					className="text-md font-light text-g2 dark:text-white"
					data-aos="fade-down"
					data-aos-duration="1000">
					Matrix currently has
				</p>

				<h1
					className="text-3xl md:text-4xl lg:text-6xl font-bold text-g2 dark:text-white hero glitch layers"
					data-text="over 1300+ members and a rapidly growing community."
					data-aos="fade-up"
					data-aos-duration="1000">
					over <span className="text-p1">1300+ members</span> and a
					rapidly <span className="text-p1">growing</span> community.
				</h1>
			</Section>

			<Section id="skills">
				<h1
					className="cursor-pointer text-3xl md:text-4xl lg:text-6xl font-bold text-g2 dark:text-white hero glitch layers"
					data-text={"skillset(^.{([a-z]*,*)+}$)"}
					data-aos="fade-down"
					data-aos-duration="1000">
					<span
						className="flex flex-row flex-wrap items-center"
						onMouseEnter={(e: MouseEvent): void =>
							e.currentTarget.classList.add("glow")
						}
						onMouseLeave={(e: MouseEvent): void =>
							e.currentTarget.classList.remove("glow")
						}
						onClick={(): void =>
							scrollToElement("languages", "smooth")
						}>
						skills(
						<span className="text-p1">{"^\\.{([a-z]*,*)+}$"}</span>)
					</span>
				</h1>

				<p
					className="cursor-pointer text-xl text-g2 dark:text-white"
					data-aos="fade-up"
					data-aos-duration="1000"
					onClick={(): void =>
						scrollToElement("languages", "smooth")
					}>
					{"<Skillset />"}
				</p>
			</Section>

			<Section id="languages">
				<SkillContainer title="Languages">
					<Skill color="#e34c26" percentage={90} name="HTML" />
					<Skill color="#264de4" percentage={70} name="CSS" />
					<Skill color="#CD6799" percentage={50} name="SASS" />
					<Skill color="#f0db4f" percentage={85} name="JavaScript" />
					<Skill color="#007acc" percentage={75} name="TypeScript" />
					<Skill color="#4584b6" percentage={40} name="Python" />
					<Skill color="#3B489C" percentage={30} name="C/C++" />
					<Skill color="#9b4993" percentage={40} name="C#" />
					<Skill color="#000080" percentage={25} name="Lua" />
					<Skill
						color="#45579A"
						percentage={10}
						name="Visual Basic"
					/>
				</SkillContainer>
			</Section>

			<Section id="frameworks">
				<SkillContainer title="Frameworks">
					<Skill color="#61DBFB" percentage={80} name="React" />
					<Skill
						color="#292E36"
						percentage={10}
						name="React Native"
					/>
					<Skill color="#000000" percentage={70} name="Next.js" />
					<Skill color="#5400D1" percentage={40} name="Blitz.js" />
					<Skill color="#000000" percentage={60} name="Express.js" />
					<Skill color="#292E36" percentage={30} name="Electron.js" />
					<Skill color="#0F0A17" percentage={95} name="discord.js" />
					<Skill color="#5A80BC" percentage={80} name="Eris" />
				</SkillContainer>
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
