import styled from "styled-components";

export const StyledButton = styled.button`
	color: white;
	cursor: pointer;
	background-color: ${(props) => (props.disabled ? "#e8575e" : "#e50914")};
	line-height: normal;
	margin: 18px 3% 0 0;
	padding: 7px 17px;

	border: transparent;
	border-radius: 3px;
	font-size: 16px;
	text-decoration: one;
	transition: ease all 0.3s;

	&:hover {
		background-color: #a2221f;
	}

	a {
		text-decoration: none;
		color: white;
	}
`;
