import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import SignOut from "../+SignOut";
import { StyledNavList, StyledLogo } from "./style";
import logo from "../../assets/logo.svg";

export interface NavigationAuthProps {}

const NavigationAuth: React.SFC<NavigationAuthProps> = () => {
	const authUser = useSelector((state: any) => state.auth.currentUser);

	return (
		<StyledNavList className='wrapper'>
			<NavLink to={ROUTES.LANDING} activeClassName='active'>
				<StyledLogo src={logo} alt='fireboard logo' />
			</NavLink>
			<li>
				<NavLink to={ROUTES.HOME} activeClassName='active'>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to={ROUTES.ACCOUNT} activeClassName='active'>
					Account
				</NavLink>
			</li>
			<li>
				<NavLink to={ROUTES.TODOS} activeClassName='active'>
					Todos
				</NavLink>
			</li>
			{authUser.roles !== undefined
				? authUser.roles.includes(ROLES.ADMIN) && (
						<li>
							<NavLink to={ROUTES.ADMIN} activeClassName='active'>
								Admin
							</NavLink>
						</li>
				  )
				: null}
			<li>
				<SignOut />
			</li>
		</StyledNavList>
	);
};

export default NavigationAuth;
