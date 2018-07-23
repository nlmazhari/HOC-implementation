#h1 React Front-End Dev Task

Your task is to build a modular, reusable form system using React components and ES6+ JavaScript. Be prepared to show off 
1) a generic `Form` system which can handle any type of form we want (Reusable Component) and 
2) a single implementation of that system with specific requirements (Single Implementation)

The form system must have the following requirements:

---

#h2 Reusable Component

#h3 Form Element
* The outputted form structure must be as flexible as possible, allowing us to create many different form instances with often vastly different layouts
* Must output standard HTML5 `form` and `input` elements, although other elements may be used in addition
* Should have solution for handling instances when the user submits, or attempts to submit, a form with invalid elements (as per validation requirements below)
* The form element should render a submission button with customizable text
* Should return an object representing form values upon valid submission

#h3 Input Elements
* The form only needs to handle `input` elements, but must be able to handle any number of them in the most flexible way possible
* Must accept a `name` and a `label`
* Must display all error messages related to validation, where appropriate

#h3 Validation
* Two validators are required for this project: 
* a ‘required’ validator which asserts that a form field is not empty, 
* and a ‘number’ validator which assets that only numeric characters are inputted
* Each input element must be able to accept any number of validator functions
* These functions should be simple, pure and reusable
* I've intentionally left specfics regarding validation UX and strategy out - show me what you think works best!

No testing is required for these components.

----------------------------------------------------------

#h2 Single Implementation

Once this has been built, build a sample form with it with the following requirements. IMPORTANT: Only THIS form instance has these requirements. The Form component requirements above should be used to build ANY type of form, not just the form below.

#h3 Field Requirements & Required Validators
* First Name: string + required
* Last Name: string
* Area code: number
* Phone number: number + required

#h3 Other Requirements
* Has `h1` header `User Contact Form`
* Positioning of elements using `Styled Components` ([included](https://www.styled-components.com/)) for optimal UX may be done, but no additional styling beyond this is required
* Return values should be printed to the console

---
#h2 Additional Notes

* No additional libraries may be imported
* A boilerplate application has been included for you to get up and running on the task.
* Be prepared to discuss your approach to this task in a followup interview.
* Feel free to add any additional functionality, so long as it doesn’t strictly replace any of the requirements above.
* If you are unsure as to how to complete a requirement, you may leave it out - but still be prepared to discuss any attempts.