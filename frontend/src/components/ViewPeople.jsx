import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Table } from 'react-bootstrap';

const ViewPeople = (props) => {
  const [people, setPeople] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/people/view/${id}`)
      .then((res) => {
        setPeople(res.data);
      })
      .catch((err) => {
        console.log('Unsucessfully');
      });
  }, [id]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">View People</h2>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Full Name</td>
                <td>{people.fullName}</td>
              </tr>
              <tr>
                <td>Name With Initials</td>
                <td>{people.nameWithInitials}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{people.gender}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{people.email}</td>
              </tr>
              <tr>
                <td>Designation</td>
                <td>{people.designation}</td>
              </tr>
              <tr>
                <td>Join Date</td>
                <td>{people.joinDate}</td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>{people.salary}</td>
              </tr>
              <tr>
                <td>Personal Notes</td>
                <td>{people.personalNotes}</td>
              </tr>
              <tr>
                <td>Preferred Name</td>
                <td>{people.preferredName}</td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td>{people.dateOfBirth}</td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>{people.mobileNumber}</td>
              </tr>
              <tr>
                <td>Employee Type</td>
                <td>{people.employeeType}</td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>{people.experience}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewPeople;
