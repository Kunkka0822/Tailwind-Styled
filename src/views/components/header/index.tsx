import React from 'react';
import tw from "tailwind-styled-components"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import useAnimatedNavToggler from "../../../helpers/useAnimatedNavToggler";

import logo from '../../../assets/images/logo.svg';
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Main = tw.header`
  flex justify-between items-center mx-auto
  max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1240px]
`;

export const DesktopNavLinks = tw.nav`hidden lg:flex flex-1 justify-between items-center`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between lg:hidden`;

type NavLinksProps = {
	$desktop?: boolean;
};
export const NavLinks = tw.div<NavLinksProps>`
	${(p: NavLinksProps) => (p.$desktop ? "inline-block flex items-center" : "inline-block flex flex-col items-center")}
`;

type NavLinkProps = {
	$login?: boolean;
};
export const NavLink = tw(Link) <NavLinkProps>`
  text-lg my-2 lg:text-base lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-y-2 border-transparent hover:border-b-blue-700 hover:text-blue-700
	${(p: NavLinkProps) => (p.$login ? "lg:ml-12!" : "")}
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  bg-gradient-to-r from-[#03228f] to-[#0e73e4] 
  text-white text-base font-semibold rounded
  !border-0 px-8 py-3 
  hover:bg-gradient-to-l hover:text-white focus:shadow-outline
`;

export const MobileNavLinks = motion(styled.div`
	lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white
`);

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes { }

export const NavToggle: React.FC<ButtonProps> = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;

export const Gap = tw.div`w-10`;

const Logo = () => {
	return (
		<div className='flex items-center font-black border-b-0 !text-3xl ml-0!'>
			<img className='w-10 mr-5' src={logo} alt="logo"></img>
			Rive Network
		</div>
	);
}

type LinksParams = {
	desktop?: boolean
};

const Links = ({desktop = true}: LinksParams) => {
	return (
		<NavLinks $desktop={desktop} key={desktop ? 1 : 2}>
			<NavLink to="/#">Home</NavLink>
			<NavLink to="/#">About</NavLink>
			<NavLink to="/#">Services</NavLink>
			<NavLink to="/#">Team</NavLink>
			<NavLink to="/#">Contact</NavLink>
			<Gap />
			<PrimaryLink to="/#">Sign In</PrimaryLink>
		</NavLinks>
	)
}

const Header = () => {
	const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();

	return (
		<Main>
			<DesktopNavLinks>
				<Logo />
				<Links />
			</DesktopNavLinks>

			<MobileNavLinksContainer>
				<Logo />
				<MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation}>
					<Links desktop={false}/>
				</MobileNavLinks>
				<NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
					{showNavLinks ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
				</NavToggle>
			</MobileNavLinksContainer>
		</Main>
	);
}

export default Header;