import type { GetStaticProps, NextPage } from "next";
import { MetaOptions, fetchMeta } from "../helpers/fetchMeta";
import { Section } from "../components/base/Section";
import { SectionContainer } from "../components/base/SectionContainer";
import type { StaticProps } from "../lib/types";

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
					Full-stack website, application and Discord bot developer.
				</p>
			</Section>

			<Section id="about">
				<h1
					className="text-3xl md:text-4xl lg:text-6xl font-bold text-g2 dark:text-white hero glitch layers"
					data-text="about.me()" data-aos="fade-down" data-aos-duration="1000">
					<span>
						about<span className="text-p1">.me()</span>
					</span>
				</h1>

				<p className="text-xl text-g2 dark:text-white" data-aos="fade-up" data-aos-duration="1000">{"<Story />"}</p>
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
