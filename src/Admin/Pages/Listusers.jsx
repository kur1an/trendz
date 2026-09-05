import { Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";


import './product.css'

function Listusers() {
  const { users } = useSelector((state) => state.userState);

  return (
    <>
      <h5 className=" text-center m-5"> List Users</h5>
      <Container>
        <Row>
          <Table striped bordered hover className=" tableList">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((users, i) => (
                <tr key={i}>
                  
                  <td>{users.fullname}</td>
                  <td>{users.email}</td>

                  <td>
<Link to={`/admin/edituser/${users.id}`}>                     
                     <FaEdit />

                    </Link>
                  </td>
                  <td>
<AiFillDelete />

                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}
export default Listusers;
