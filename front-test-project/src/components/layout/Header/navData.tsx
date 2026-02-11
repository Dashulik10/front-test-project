export interface NavItem {
    label: string;
    href: string;
}

export const HeaderRefs:NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Tour', href: '/tour' },
    { label: 'Package', href: '/package' },
    { label: 'Contact', href: '/contact' },
]