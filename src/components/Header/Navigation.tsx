import dynamic from 'next/dynamic';

const NavLink = dynamic(import('./NavLink'));

interface NavigationItem {
    id: string;
    label: string;
    href: string;
}

const navList: NavigationItem[] = [
    {
        id: 'pricing',
        label: 'Pricing',
        href: '/pricing'
    }
]

export default function Navigation(): JSX.Element {
    return (
        <nav>
            {navList.map(nav => (
                <NavLink key={nav.id} href={nav.href}>
                    {nav.label}
                </NavLink>
            ))}
        </nav>
    )
}
