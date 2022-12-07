export function sectionInView(element: HTMLElement): boolean {
    const pageTop: number = window.scrollY;
    const elementTop: number = element.getBoundingClientRect().top;

    return pageTop <= elementTop;
}
