import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import * as formik from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/userSlice";

function Signup() {
  const { Formik } = formik;
const dispatch = useDispatch();

  const schema = yup.object().shape({
    fullname: yup
      .string()
      .required("Please Enter the Fullname")
      .min(6, "Length must be at least 6 characters")
      .max(50, "Max Length Exceeds"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const handleSignup = (values) => {
    values.id = Date.now();
    values.role ='user';
    values.status =true;
dispatch(userRegister(values));


// console.log("", values);
  };

  return (
    <>
      <Row md={8} className="m-5 justify-content-center d-flex flex-column">
        <h2>Signup Page</h2>
        <Col>
          <Formik
            validationSchema={schema}
            onSubmit={handleSignup}
            initialValues={{ fullname: "", email: "", password: "" }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3 justify-content-center  d-flex flex-column">
                  <Form.Group as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullname"
                      value={values.fullname}
                      onChange={handleChange}
                      isValid={touched.fullname && !errors.fullname}
                      isInvalid={touched.fullname && !!errors.fullname}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.fullname}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="validationFormik02">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && !!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="validationFormik03">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      isValid={touched.password && !errors.password}
                      isInvalid={touched.password && !!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Button type="submit" variant="danger">
                  Signup
                </Button>
              </Form>
            )}
          </Formik>
        </Col>

        <Link to="/login">If you have an account, Login here!</Link>
      </Row>
    </>
  );
}

export default Signup;
