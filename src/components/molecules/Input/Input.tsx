import React, { FC, Fragment } from 'react';
import { StyledInput, StyledLabel, StyledMessage, StyledText } from './Input.style';
import { InputProps } from './Input.types';

const Input: FC<InputProps> = ({
	id,
	disabled,
	label,
	message,
	error,
	success,
	onChange,
	placeholder,
	...props
}) => {
	return (
		<Fragment>
			<StyledLabel>
				<StyledText disabled={disabled} error={error}>
					{label}
				</StyledText>
			</StyledLabel>
			<StyledInput
				id={id}
				type='text'
				onChange={onChange}
				disabled={disabled}
				error={error}
				success={success}
				placeholder={placeholder}
				{...props}
			></StyledInput>
			<StyledMessage>
				<StyledText error={error}>{message}</StyledText>
			</StyledMessage>
		</Fragment>
	);
};

export default Input;
