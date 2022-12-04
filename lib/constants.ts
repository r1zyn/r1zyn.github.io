import { Metadata } from "./types";

import packageJson from "../package.json";

export const metadata: Metadata = {
    url:
        process.env.NODE_ENV === "production"
            ? "https://r1zyn.github.io/powerball-simulator/"
            : "http://localhost:3000/",
    "theme-color": "#ffffff",
    "site-name": "Made by tncz",
    icon: "/img/ad74c83afa9413a01406cbc6c6ba0d4c.jpg",
    keywords: packageJson.keywords
};
