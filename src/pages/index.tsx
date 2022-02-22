import { useState } from 'react'
import clsx from 'clsx'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import useScrollPosition from '@react-hook/window-scroll'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Image from 'next/image'

import dynamic from 'next/dynamic'

// const Layout = dynamic(import('../components/Layout'));
// const Pricing = dynamic(import('../components/Pricing'));

interface NavBarProps {
    onToggleNav: () => void
}

interface NavListProps {
    onToggleNav: () => void
    href: string
    label: string
    isScroll: boolean
}

const NavList = (props: NavListProps) => (
    <li className="list-none ml-[1.875rem]">
        <a
            className={clsx(
                props.isScroll ? 'text-black' : 'text-white',
                'no-underline font-normal hover:text-main'
            )}
            href={props.href}
            onClick={props.onToggleNav}
        >
            {props.label}
        </a>
    </li>
)

const NavBar = (props: NavBarProps) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('lg'))
    const scrollY = useScrollPosition()
    const [isNavActive, setNavActive] = useState(false)
    const onToggleNav = () => {
        setNavActive(!isNavActive)
    }

    return (
        <header
            className={clsx(
                matches && '',
                scrollY > 0 ? 'py-2.5' : 'py-10',
                scrollY > 0 && 'bg-white shadow-[0_5px_20px_rgba(0,0,0,0.5)]',
                'fixed top-0 left-0 w-full px-24 z-10 flex justify-between items-center transition-all duration-500'
            )}
        >
            <a
                href="#"
                className={clsx(
                    'no-underline text-white font-bold text-[32px]',
                    scrollY && 'text-[#111111]'
                )}
            >
                Food<span className="text-main">.</span>
            </a>
            {matches ? (
                <IconButton aria-label="navbar" onClick={onToggleNav}>
                    <MenuIcon />
                </IconButton>
            ) : (
                <ul className="static flex">
                    <NavList
                        onToggleNav={onToggleNav}
                        label="Home"
                        href="#"
                        isScroll={scrollY > 0}
                    />
                    <NavList
                        onToggleNav={onToggleNav}
                        label="About"
                        href="#about"
                        isScroll={scrollY > 0}
                    />
                    <NavList
                        onToggleNav={onToggleNav}
                        label="Menu"
                        href="#menu"
                        isScroll={scrollY > 0}
                    />
                    <NavList
                        onToggleNav={onToggleNav}
                        label="Expert"
                        href="#expert"
                        isScroll={scrollY > 0}
                    />
                    <NavList
                        onToggleNav={onToggleNav}
                        label="Testimonials"
                        href="#testimonials"
                        isScroll={scrollY > 0}
                    />
                    <NavList
                        onToggleNav={onToggleNav}
                        label="Contact"
                        href="#contact"
                        isScroll={scrollY > 0}
                    />
                </ul>
            )}
        </header>
    )
}

const Banner = () => {
    return (
        <section
            className="relative w-full h-screen flex justify-center items-center bg-cover bg-[url('/images/bg.jpg')]"
            id="banner"
        >
            <div className="max-w-[900px] text-center text-white">
                <h2 className="font-bold text-[5em] text-white">
                    Always Choose Good
                </h2>
                <p className="text-[1em] text-white font-normal">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                </p>
                <a
                    href="#"
                    className="text-white bg-main inline-block px-8 py-2.5 uppercase no-underline mt-5 tracking-wide duration-500 hover:tracking-widest"
                >
                    Out Menu
                </a>
            </div>
        </section>
    )
}

const Abount = () => {
    return (
        <section id="about">
            <div className="relative flex w-full justify-between">
                <div className="w-[48%]">
                    <h2 className="text-[#111111] text-[2em] font-normal">
                        <span className="relative text-main text-5xl font-bold">
                            A
                        </span>
                        bout Us
                    </h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries <br />
                        <br />
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                    </p>
                </div>
                <div className="w-[48%]">
                    <div className="relative w-full h-full">
                        <Image
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src="/images/img1.jpg"
                            alt="about site"
                            layout="fill"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

const Menu = () => {
    return (
        <section id="menu">
             <div className="max-w-[900px] text-center text-white">
                <h2 className="font-bold text-[5em] text-white">
                    <span>O</span>ur Menu
                </h2>
                <p className="text-[1em] text-black font-normal">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                </p>
            </div>
            <div className="flex relative justify-center flex-wrap mt-10">
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.08);
                <div className="w-[340px] mt-5 border-[15px] border-white border-solid  shadow-[0_5px_35px_rgba(0,0,0,0.5)]">
                    <div class="img-bx">
                        <img src="../images/menu1.jpg" alt="" />
                    </div>
                    <div class="text">
                        <h3>Special Salads</h3>
                    </div>
                </div>
                <div class="box">
                    <div class="img-bx">
                        <img src="../images/menu2.jpg" alt="" />
                    </div>
                    <div class="text">
                        <h3>Special Soup</h3>
                    </div>
                </div>
                <div class="box">
                    <div class="img-bx">
                        <img src="../images/menu3.jpg" alt="" />
                    </div>
                    <div class="text">
                        <h3>Special Pasta</h3>
                    </div>
                </div>
                <div class="box">
                    <div class="img-bx">
                        <img src="../images/menu4.jpg" alt="" />
                    </div>
                    <div class="text">
                        <h3>Special Salads</h3>
                    </div>
                </div>
                <div class="box">
                    <div class="img-bx">
                        <img src="../images/menu5.jpg" alt="" />
                    </div>
                    <div class="text">
                        <h3>Special Soup</h3>
                    </div>
                </div>
                <div class="box">
                    <div class="img-bx">
                        <img src="../images/menu6.jpg" alt="" />
                    </div>
                    <div class="text">
                        <h3>Special Pasta</h3>
                    </div>
                </div>
            </div>
            <div class="title">
                <a href="#" class="btn">
                    View all
                </a>
            </div>
        </section>
    )
}

export default function LandPage(): JSX.Element {
    const onToggleNav: () => void = () => {}

    return (
        <div className="min-h-full">
            <NavBar onToggleNav={onToggleNav} />
            <Banner />
            <Abount />
        </div>
    )
}
