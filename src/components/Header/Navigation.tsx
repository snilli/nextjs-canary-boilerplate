import dynamic from 'next/dynamic';

const NavLink = dynamic(import('./Link'));

interface NavigationItem {
    id: string;
    label: string;
    href: string;
}

const navList: NavigationItem[] = [
    {
        id: 'home',
        label: 'Home',
        href: '/'
    },
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
