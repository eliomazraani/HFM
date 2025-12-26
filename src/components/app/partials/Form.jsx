import { useState } from "react"
import { useFormik } from "formik"
import { Form, SelectPicker, Checkbox } from "rsuite"
import PageSection from "../../ui/pageElement/PageSection"
import SubmitBtn from "../../ui/button/SubmitBtn"
import "../../../assets/style/form.css"

function FormEl({background, titleSpan, title, formTitle}) {
    const [code, setCode] = useState("");

    const countries = [
        {value: "CY", label: "Cyprus"},
        {value: "UK", label: "United Kingdom"},
        {value: "GR", label: "Germany"}
    ]

    function changeCountry(value) {
        formik.setFieldValue("country", value)

        switch (value) {
        case "CY":
            setCode("+357")
            break
        case "UK":
            setCode("+44")
            break
        case "GR":
            setCode("+49")
            break
        default:
            setCode("")
        }
    }

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            country: "",
            phone: "",
            email: "",
            experience: "",
            consent: false
        },

        validate: values => {
            const errors = {}

            if (!values.firstName) errors.firstName = "Required"
            if (!values.lastName) errors.lastName = "Required"

            if (!values.country) errors.country = "Required"

            if (!values.phone) errors.phone = "Required"

            if (!values.email) {
                errors.email = "Required"
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = "Invalid email address"
            }

            return errors
        },

        onSubmit: values => {
            const payload = {
                ...values,
                code
            }
            console.log(payload)
        }
    })

    return (
        <>
            <PageSection cls="formElement" style={{ backgroundImage: `url(${background})` }}>
                <div className="wrap">
                    <h2>
                        <span>{titleSpan}</span> {title}
                    </h2>
                    <Form onSubmit={formik.handleSubmit}>
                        <p>{formTitle}</p>
                        <Form.Stack>
                            <Form.Group className="rs-form-stack-inline" width="100%">
                                <Form.Group controlId="firstName" width="50%">
                                    <Form.Control name="firstName" placeholder="First Name" value={formik.values.firstName} onChange={value => formik.setFieldValue("firstName", value)} className="rs-form-50-100" />
                                    <Form.ErrorMessage show={!!formik.errors.firstName} placement="bottomStart">
                                        {formik.errors.firstName}
                                    </Form.ErrorMessage>
                                </Form.Group>
                                <Form.Group controlId="lastName" width="50%">
                                    <Form.Control name="lastName" placeholder="Last Name" value={formik.values.lastName} onChange={value => formik.setFieldValue("lastName", value)} className="rs-form-50-100" />
                                    <Form.ErrorMessage show={!!formik.errors.lastName} placement="bottomStart">
                                        {formik.errors.lastName}
                                    </Form.ErrorMessage>
                                </Form.Group>
                            </Form.Group>
                            <Form.Group className="rs-form-stack-inline" width="100%">
                                <Form.Group controlId="country" width="50%">
                                    <Form.Control name="country" placeholder="Country" accepter={SelectPicker} data={countries} value={formik.values.country} onChange={changeCountry} className="rs-form-50-100" />
                                    <Form.ErrorMessage show={!!formik.errors.country} placement="bottomStart">
                                        {formik.errors.country}
                                    </Form.ErrorMessage>
                                </Form.Group>
                                <Form.Group className="rs-form-stack-inline" width="50%">
                                    <Form.Control name="code" placeholder="Code" value={code} readOnly className="rs-form-30-100" />
                                    <Form.Group controlId="phone" width="100%">
                                        <Form.Control name="phone" placeholder="Phone" type="phone" value={formik.values.phone} onChange={value => formik.setFieldValue("phone", value)} className="rs-form-70-100" />
                                        <Form.ErrorMessage show={!!formik.errors.phone} placement="bottomStart">
                                            {formik.errors.phone}
                                        </Form.ErrorMessage>
                                    </Form.Group>
                                </Form.Group>
                            </Form.Group>
                            <Form.Group className="rs-form-stack-inline" width="100%">
                                <Form.Group controlId="email" width="50%">
                                    <Form.Control name="email" placeholder="Email" type="email" value={formik.values.email} onChange={value => formik.setFieldValue("email", value)} className="rs-form-50-100" />
                                    <Form.ErrorMessage show={!!formik.errors.email} placement="bottomStart">
                                        {formik.errors.email}
                                    </Form.ErrorMessage>
                                </Form.Group>
                                <Form.Group controlId="experience" width="50%">
                                    <Form.Control name="experience" placeholder="Experience" accepter={SelectPicker} value={formik.values.experience} onChange={value => formik.setFieldValue("experience", value)} className="rs-form-50-100" />
                                    <Form.ErrorMessage show={!!formik.errors.experience} placement="bottomStart">
                                        {formik.errors.experience}
                                    </Form.ErrorMessage>
                                </Form.Group>
                            </Form.Group>
                            <Form.Group>
                                <Checkbox checked={formik.values.consent} onChange={(_, checked) => formik.setFieldValue("consent", checked)} className="consentBox">I have read and accepted the <span className="red">Privacy Policy</span> and <span className="red">Terms and Conditions</span></Checkbox>
                            </Form.Group>
                        </Form.Stack>
                        <SubmitBtn />
                    </Form>
                </div>
            </PageSection>
        </>
    )
}

export default FormEl