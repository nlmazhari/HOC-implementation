import React from 'react'

const enhancedForm = (WrappedComponent) => {
    class HOC extends React.Component {
        constructor(props) {
            super(props)
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
            this.state = {
                firstName: '', 
                lastName: '',
                areaCode: '', 
                phoneNumber: ''
            }
        }

        handleChange(e) {
            this.setState({ [e.target.name]: e.target.value })
        }

        handleSubmit(e) {
            e.preventDefault()

            const reqValidation = this.isRequired()
            const numValidation = this.isNumber()

            if (reqValidation && numValidation) {
                alert("Submitted!")
                console.log('===================================')
                console.log(this.state)
                console.log('===================================')
            }
        }
        
        camel2title(camelCase) {
            return camelCase
                .replace(/([A-Z])/g, function (match) {
                    return " " + match;
                })
                .replace(/^./, function (match) {
                    return match.toUpperCase();
                });
        }

        isRequired() {
            const reqField = document.querySelectorAll(".required")
                
            let reqResult = true
            for (let i = 0; i < reqField.length; i++) {
                if (reqField[i].value === "") {
                    reqResult = false
                    return alert(`${this.camel2title(reqField[i].name)} is required`)
                }
            }
            return reqResult;
        }

        isNumber() {
            const numField = document.querySelectorAll(".number")

            let numResult = true
            for (let i = 0; i < numField.length; i++) {
                if (numField[i].value !== '' && !Number(numField[i].value)) {
                    numResult = false
                    return alert(`${this.camel2title(numField[i].name)} should be a number`)
                }
            }
            return numResult
        }


        render() {
            return (
                <WrappedComponent
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    firstName = {this.state.firstName}
                    lastName = {this.state.lastName}
                    areaCode = {this.state.areaCode}
                    phoneNumber = {this.state.phoneNumber}
                    {...this.props}
                />
            )
        }
    }
    return HOC
}

export default enhancedForm