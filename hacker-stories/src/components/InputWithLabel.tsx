import React, { ReactNode } from "react";
import styles from "../App.module.css";

export interface InputWithLabelProps {
	id: string;
	value: string;
	onInputChange: any;
	type?: string;
	children?: ReactNode;
	isFocused: boolean;
}
const InputWithLabel: React.SFC<InputWithLabelProps> = ({
	id,
	type = "text",
	value,
	onInputChange,
	children,
	isFocused
}) => {
	const inputRef = React.useRef<HTMLInputElement>(null);

	React.useEffect(() => {
		if (isFocused && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isFocused]);
	return (
		<>
			<label htmlFor={id} className={styles.label}>
				{children}
			</label>
			&nbsp;
			<input
				ref={inputRef}
				id={id}
				type={type}
				value={value}
				onChange={onInputChange}
				autoFocus={isFocused}
				className={styles.input}
			/>
		</>
	);
};

export default InputWithLabel;
