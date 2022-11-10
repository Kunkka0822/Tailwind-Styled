import React from 'react';
import tw from "tailwind-styled-components"
import logo from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import useAnimatedNavToggler from "../../../helpers/useAnimatedNavToggler";

type NavLinkProps = {
	$login?: boolean;
}

export const NavLinks = tw.div`inline-block`;

export const NavLink = tw(Link) <NavLinkProps>`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
	${(p: NavLinkProps) => (p.$login ? "lg:ml-12!" : "")}
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-purple-800 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

//@ts-ignore
// export const MobileNavLinks = motion(styled.div`
// 	${twm`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
// 	${NavLinks} {
// 		${twm`flex flex-col items-center`}
// 	}
// `);

export const MobileNavLinks = motion(styled.div`
	lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white
	${NavLinks} {
		flex flex-col items-center
	}
`);

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes { }

export const NavToggle: React.FC<ButtonProps> = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;

const Logo = () => {
	return (
		<div className='flex items-center font-black border-b-0 text-2xl! ml-0!'>
			<img className='w-10 mr-3' src={logo} alt="logo"></img>
			Shopify
		</div>
	);
}

const Links = () => {
	return (
		<NavLinks key={1}>
			<NavLink to="/#">About</NavLink>
			<NavLink to="/#">Blog</NavLink>
			<NavLink to="/#">Pricing</NavLink>
			<NavLink to="/#">Contact Us</NavLink>
			<NavLink to="/#" $login={true}>
				Login
			</NavLink>
			<PrimaryLink to="/#">Sign Up</PrimaryLink>
		</NavLinks>
	)
}

const Header = () => {
	const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();

	return (
		<div className='flex justify-between items-center max-w-screen-xl mx-auto'>
			<div className='hidden lg:flex flex-1 justify-between items-center'>
				<Logo />
				<Links />
			</div>

			<div className='flex flex-1 items-center justify-between lg:hidden'>
				<Logo />
				<MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation}>
					<Links />
				</MobileNavLinks>
				{/* <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
					{/* {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />} */}
				{/* </NavToggle> */}
			</div>
		</div>
	);
}

export default Header;