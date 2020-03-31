import React, { useState } from "react";
import { InputWithLabel, Button } from "../shared";

export interface PasswordChangeFormProps {
	firebase: any;
}

const initialState = {
	passwordOne: "",
	passwordTwo: "",
	error: null
};

const PasswordChangeForm: React.SFC<PasswordChangeFormProps> = ({
	firebase
}) => {
	const [state, setState] = useState(initialState);
	const { passwordOne, passwordTwo, error } = state;

	const isInvalid = passwordOne !== passwordTwo || passwordTwo === "";

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			await firebase.doPasswordUpdate(passwordOne);
			setState({ ...initialState });
		} catch (error) {
			setState({
				...state,
				error: error.message
			});
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value
		});
	};
	return (
		<form onSubmit={handleSubmit}>
			<InputWithLabel
				type='password'
				name='passwordOne'
				id={passwordOne}
				value={passwordOne}
				onInputChange={handleChange}
				placeholder='New Password'>
				New Password
			</InputWithLabel>

			<InputWithLabel
				type='password'
				name='passwordTwo'
				id={passwordTwo}
				value={passwordTwo}
				onInputChange={handleChange}
				placeholder='Confirm New Password'>
				Confirm New Password
			</InputWithLabel>

			<Button type='submit' disabled={isInvalid}>
				Reset My Password
			</Button>

			{error && <p>{error}</p>}
		</form>
	);
};

export default PasswordChangeForm;