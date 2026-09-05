import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import { Link } from "react-router-dom";
import * as formik from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct } from "../../redux/productSlice";

function Editproduct() {
  const { Formik } = formik;
const dispatch = useDispatch();
const navigate = useNavigate();
const {id} = useParams();
const {products} = useSelector((state)=> state.productState);
const product = products?.find((pr) => pr.id === Number(id));
  





const schema = yup.object().shape({
    productName: yup
      .string()
      .required("Please Enter the productName")
      .min(6, "Length must be at least 6 characters")
      .max(50, "Max Length Exceeds"),
    productPrice: yup.number().required("Enter the price"),
    productDesc: yup.string().required("Enter the description"),
    productPhoto: yup.string().required("Photo area"),

  });

  const handleEditproduct = (values) => {
    values.id = Date.now();
    values.role ='user';
    values.status =true;
dispatch(addProduct(values));
toast.info("Edit Done Succesfully!!");
navigate("/admin/listproducts");
// console.log("", values);
  };



  return (
    <>
      <Row  className="m-5 justify-content-center d-flex flex-column">
        <h2>Edit Product Section</h2>
        <Col md={8} >
          <Formik
            validationSchema={schema}
            onSubmit={handleEditproduct}
            initialValues={{ productName:product?.productName?? "", productPrice:product?.productPrice?? "", productDesc:product?.productDesc?? "" ,productPhoto:product.productPhoto??"" }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3 justify-content-center  d-flex flex-column">
                  <Form.Group as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="productName"
                      value={values.productName}
                      onChange={handleChange}
                      isValid={touched.productName && !errors.productName}
                      isInvalid={touched.productName && !!errors.productName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.productName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="validationFormik02">
                    <Form.Label>productPrice</Form.Label>
                    <Form.Control
                      type="number"
                      name="productPrice"
                      value={values.productPrice}
                      onChange={handleChange}
                      isValid={touched.productPrice && !errors.productPrice}
                      isInvalid={touched.productPrice && !!errors.productPrice}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.productPrice}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="validationFormik03">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control 
                      as="textarea"
                        rows={5}
                      name="productDesc"
                      value={values.productDesc}
                      onChange={handleChange}
                      isValid={touched.productDesc && !errors.productDesc}
                      isInvalid={touched.productDesc && !!errors.productDesc}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.productDesc}
                    </Form.Control.Feedback>
                  </Form.Group>
 <Form.Group as={Col} controlId="validationFormik03">
                    <Form.Label>Product Photo</Form.Label>
                    <Form.Control
                      type="text"
                      name="productPhoto"
                      value={values.productPhoto}
                      onChange={handleChange}
                      isValid={touched.productPhoto && !errors.productPhoto}
                      isInvalid={touched.productPhoto && !!errors.productPhoto}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.productPhoto}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Button type="submit" variant="warning">
                  Add product
                </Button>
              </Form>
            )}
          </Formik>
        </Col>

        {/* <Link to="/login">If you have an account, Login here!</Link> */}
      </Row>
    </>
  );
}

export default Editproduct;
