import React from 'react'
import dynamic from 'next/dynamic'

// const Layout = dynamic(import('../components/Layout'));
// const Pricing = dynamic(import('../components/Pricing'));

export default function LandPage(): JSX.Element {
    return (
        // transition: 0.5s;
        <header className='header'>
            <a href="#" className='logo'>
                Food<span>.</span>
            </a>
        </header>
    )
}

<header>
    <a href="#" class="logo">Food<span>.</span></a>
    <div class="menu-toggle" onclick="toggleMenu()">

    </div>
    {/* <ul class="navigation">
        <li><a href="#banner" onclick="toggleMenu()">Home</a></li>
        <li><a href="#about" onclick="toggleMenu()">About</a></li>
        <li><a href="#menu" onclick="toggleMenu()">Menu</a></li>
        <li><a href="#expert" onclick="toggleMenu()">Expert</a></li>
        <li><a href="#testimonials" onclick="toggleMenu()">Testimonials</a></li>
        <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
    </ul> */}
</header>