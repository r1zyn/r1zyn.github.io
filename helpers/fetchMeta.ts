import metadata from "../lib/data/metadata.json";

export interface MetaOptions {
    title: string;
    description?: string;
}

export function fetchMeta(page: string): MetaOptions {
    return metadata[page as keyof typeof metadata];
}