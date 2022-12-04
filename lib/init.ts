import packageJson from "../package.json";

export function init(): void {
    console.log(`
████████╗███╗░░██╗░█████╗░███████╗
╚══██╔══╝████╗░██║██╔══██╗╚════██║
░░░██║░░░██╔██╗██║██║░░╚═╝░░███╔═╝
░░░██║░░░██║╚████║██║░░██╗██╔══╝░░
░░░██║░░░██║░╚███║╚█████╔╝███████╗
░░░╚═╝░░░╚═╝░░╚══╝░╚════╝░╚══════╝

┆ tncz.dev()
┆ Made with Next.js and Tailwind CSS
┆ Version ${packageJson.version}
┆ https://github.com/r1zyn/r1zyn.gitub.io
    `);
}
