import type { MouseEvent } from "react";

import { scrollToElement } from "scroll-util";

export function handleClick(e: MouseEvent, id: string): void {
    scrollToElement(id, "smooth");

    e.currentTarget.parentElement
        ?.querySelectorAll("li")
        ?.forEach((li: HTMLLIElement): void => li.classList.remove("text-p1"));

    if (!e.currentTarget.classList.contains("text-p1")) {
        e.currentTarget.classList.add("text-p1");
    }
}
