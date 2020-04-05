import * as React from "react";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { StyledNavList, StyledLogo } from "./style";
import { Button } from "../shared";
import logo from "../../assets/logo.svg";
import { SignOutButton } from "../+SignOut/style";

export interface NavigationNonAuthProps {}

const NavigationNonAuth: React.SFC<NavigationNonAuthProps> = () => {
	return (
		<StyledNavList className='wrapper'>
			<NavLink to={ROUTES.LANDING} activeClassName='active'>
				<StyledLogo src={logo} alt='fireboard logo' />
			</NavLink>

			<SignOutButton>
				<NavLink to={ROUTES.SIGN_IN} activeClassName='active'>
					Sign In
				</NavLink>
			</SignOutButton>
		</StyledNavList>
	);
};

export default NavigationNonAuth;
