import type { BaseContext } from "next/dist/shared/lib/utils";
import type { CSSProperties } from "react";
import type { NextComponentType } from "next";

export interface BaseProps {
    className?: string;
    id?: string;
    style?: CSSProperties;
}

export interface Metadata {
    url: string;
    "theme-color": string;
    "site-name": string;
    image?: string;
    icon: string;
    keywords: string[];
}

export type NextComponent<
    P = {},
    IP = {}
> = NextComponentType<BaseContext, IP, P>;

export type Props<P = {}> = P & BaseProps;

export type PropsWithChildren<P = {}> = Props<P> & {
    children?: React.ReactNode;
};

export type StaticProps<P = {}> = {
    props: P;
}