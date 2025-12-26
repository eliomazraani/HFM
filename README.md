React Landing Page Exercise – HF Markets Group

Overview

This project is a fully functional, responsive landing page implemented in React, based on the provided Figma design. The purpose of the exercise is to demonstrate modern React development practices, clean component architecture, responsive UI implementation, and proper form handling with validation.

The solution focuses on clarity, maintainability, and close attention to design and UX details.
<!------>
Objective

The goal of this assessment was to:
•	Translate a Figma design into a responsive React application
•	Use functional components and React hooks following best practices
•	Implement proper form handling and validation
•	Ensure a clean, intuitive user experience across all screen sizes
<!------>
Tech Stack

•	React (functional components & hooks)
•	Vite (development and build tooling)
•	Formik (form state management and validation)
•	RSuite (UI components and form elements)
•	SCSS (component-based styling)
<!------>
Application Structure & Approach

Component Architecture

The application is structured into small, reusable components to ensure:
•	Clear separation of concerns
•	Readable and maintainable code
•	Scalability for future enhancements
Each major section of the landing page (layout sections, form, buttons, etc.) is implemented as an independent component.

Although this is a relatively large and feature-rich exercise, the application was intentionally designed using a scalable and reusable component architecture to ensure long-term maintainability and ease of extension.
<!------>
Responsive Design

•	The layout adapts smoothly to mobile, tablet, and desktop screen sizes
•	Flexbox-based layouts and responsive CSS rules are used
•	Spacing, typography, and alignment were carefully adjusted to closely match the Figma design
<!------>
Form Implementation Details

Form Management
•	The form is implemented using Formik for state handling and validation
•	RSuite Form components are used for consistent UI behavior and accessibility
•	All inputs are implemented as controlled components
•	Local React state is used only where appropriate (e.g., country code prefill)

This approach keeps validation logic explicit, predictable, and easy to extend.
<!------>
Validation Strategy

Client-side validation is implemented according to the requirements:

•	Required fields:
o	First name
o	Last name
o	Country
o	Phone number
o	Email
•	Email validation is handled using a RegEx pattern
•	Validation errors are displayed inline using Form.ErrorMessage

This provides immediate user feedback and improves form usability.
<!------>
Dynamic Phone Number Prefill

To satisfy the dynamic phone number requirement:
•	A country selector (SelectPicker) is used
•	Selecting a country automatically sets the corresponding country code
•	The country code field is read-only to prevent manual modification

Supported examples:
•	Cyprus → +357
•	United Kingdom → +44
•	Germany → +49
The logic is handled via a dedicated change handler to keep the behavior explicit and maintainable.
<!------>
Form Submission

•	On submission, Formik validates all fields
•	A payload is constructed combining form values and the selected country code
•	The payload is logged to the console to simulate submission

This satisfies the submission requirement without requiring backend integration.
<!------>
UX Considerations

•	Inputs are grouped logically to match the Figma layout
•	Inline layouts adjust responsively on smaller screens
•	Error messages appear close to their respective fields
•	Consent checkbox state is fully controlled and tracked in form state
<!------>
Running the Project

Prerequisites
•	Node.js (v16+ recommended)
•	npm

Installation & Execution
npm install
npm run dev
The application will be available at the local development URL provided by Vite.
<!------>
Assumptions & Limitations

Assumptions
•	No backend submission endpoint is required
•	The focus is on frontend implementation and UX
•	The application targets modern browsers

Limitations
•	Server-side validation and persistence are not implemented
•	Error handling is limited to client-side validation
•	Accessibility enhancements could be expanded further
<!------>
Notes for Reviewers

•	The project strictly follows the requirement to use React only
•	No automatically generated code from design tools was used
•	The solution prioritizes clean UX, readability, and modern React practices