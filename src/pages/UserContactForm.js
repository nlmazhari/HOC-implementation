// your form instance goes here
// import your form components from the 'components' file here
import React from 'react'
import styled from 'styled-components'
import enhancedForm from '../components/enhancedForm' 
import { injectGlobal } from 'styled-components'

// example of styled component
injectGlobal`
  body {
	background: #f4f4f4; 
	margin: 0;
  }
`

const FormHeader = styled.h1`
	color: #7fb1f6;
	font-weight: 400;
`
const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`

const Form = styled.form`
	background: white;
	display: flex;
	flex-direction: column;
	padding: 2em;
	min-width: 400px;
`
const Button = styled.button`
	box-shadow: none;
	border-radius: 3px;
	padding: 6px 12px;  
	margin: 1em 0;
	text-transform: capitalize;
	background: transparent;
	color: #68cdd4;
	border: 2px solid #68cdd4;
	transform-style: flat;
	transition: all 500ms ease-out;
	font-size: 1.1em;
	&:active,
	&:focus,
	&:hover,
	&.btn-default:active,
	&.btn-default:active:focus,
	&.btn-default:active:hover {
		transform-style: flat;
		transition: all 250ms ease-out;
		box-shadow: 0 10px 20px -8px rgba(31, 31, 31, 0.7);  
		background: #68cdd4;
		border: 2px solid #68cdd4;  
		color:#fff;    
	}
`

const Label = styled.label`
	text-transform: capitalize;
	display: inline;
	padding: .2em .6em .3em 0;
	font-size: 75%;
	font-weight: 200;
	line-height: 1;
	color: #444;
	white-space: nowrap;
	vertical-align: baseline;
	border-radius: .25em;
`

const Input = styled.input`
	display: block;
	width: 100%;
	height: 34px;
	padding: 6px 12px;
	margin-bottom: 1em;
	font-size: 14px;
	line-height: 1.42857143;
	color: #555;
	background-color: #fff;
	background-image: none;
	border: 1px solid #abd6ff;
	border-radius: 3px;
	-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
	box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
	-webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
	-o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
	transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
`
const Tooltiptext = styled.span`
	visibility: hidden;
	background-color: #7e8fef;
	color: #fff;
	padding: .5em;
	border-radius: 3px;
	position: absolute;
	z-index: 1;
	bottom: 125%;
	left: 50%;
	margin-left: -60px;
	opacity: 0;
	transition: opacity 0.3s;
	&::after {
	content: "";
	position: absolute;
	top: 100%;
	left: 50%;
	margin-left: -5px;
	border-width: 5px;
	border-style: solid;
	border-color: #7e8fef transparent transparent transparent;
  }
`

const Tooltip = styled.div`
	position: relative;
	display: inline-block;
	&:hover ${Tooltiptext} {
		visibility: visible !important;
		opacity: 1 !important;
	}
`

const UserContactForm = ({ firstName, lastName, areaCode, phoneNumber, handleChange, handleSubmit}) => (
	<Wrap>
		<Form id="myForm" onSubmit={(e) => handleSubmit(e)}>
			<FormHeader>User Contact Form</FormHeader>
			<Label htmlFor="firstName">
				first name
				<Tooltip>*
				<Tooltiptext>this field is required</Tooltiptext>
				</Tooltip>
			</Label> 
			<Input
				type="text"
				name="firstName"
				id="firstName"
				className="required"
				value={firstName}
				onChange={handleChange}
			/>
			<Label htmlFor="lastName">
				last name
			</Label>
			<Input
				type="text"
				name="lastName"
				value={lastName}
				onChange={handleChange}
			/>
			<Label htmlFor="areaCode">
				area code
			</Label>
			<Input
				name="areaCode"
				id="areaCode"
				className="number"
				value={areaCode}
				onChange={handleChange}
			/>
			<Label htmlFor="phoneNumber">
				phone number
				<Tooltip>*
				<Tooltiptext>this field is required</Tooltiptext>
				</Tooltip>
			</Label>
			<Input
				name="phoneNumber"
				id="phoneNumber"
				className="required number"
				value={phoneNumber}
				onChange={handleChange}
			/>
			<Button type="submit" value="submit">submit</Button>
		</Form>
  </Wrap>
)

export default enhancedForm(UserContactForm)