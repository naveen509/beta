import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Table } from 'react-bootstrap';

const UpdatePeople = (props) => {
const [people, setPeople] = useState({
  fullName:'',
  nameWithInitials:'',
  gender:'',
  email:'',
  designation:'',
  joinDate:'',
  salary:'',
  personalNotes:'',
  preferredName:'',
  dateOfBirth:'',
  mobileNumber:'',
  employeeType:'',
  experience:''
});

const { id } = useParams();
const navigate = useNavigate();

useEffect(() => {
axios
.get(`http://localhost:5000/people/view/${id}`)
.then((res) => {
setPeople({
  fullName: res.data.fullName,
  nameWithInitials: res.data.nameWithInitials,
  gender: res.data.gender,
  email: res.data.email,
  designation: res.data.designation,
  joinDate: res.data.joinDate,
  salary: res.data.salary,
  personalNotes: res.data.personalNotes,
  preferredName: res.data.preferredName,
  dateOfBirth: res.data.dateOfBirth,
  mobileNumber: res.data.mobileNumber,
  employeeType: res.data.employeeType,
  experience: res.data.experience
});
})
.catch((err) => {
console.log('Unsucessfully');
});
}, [id]);

const onChange = (e) => {
setPeople({ ...people, [e.target.name]: e.target.value });
};

const onSubmit = (e) => {
e.preventDefault();
const data = {
  fullName: people.fullName,
        nameWithInitials: people.nameWithInitials,
        gender: people.gender,
        email: people.email,
        designation: people.designation,
        joinDate: people.joinDate,
        salary: people.salary,
        personalNotes: people.personalNotes,
        preferredName: people.preferredName,
        dateOfBirth: people.dateOfBirth,
        mobileNumber: people.mobileNumber,
        employeeType: people.employeeType,
        experience: people.experience
};

axios
  .put(`http://localhost:5000/people/update/${id}`, data)
  .then((res) => {
    navigate(`/`);
  })
  .catch((err) => {
    console.log('Error in update!');
  });
};

return (
<div style={{ textAlign: "center" }}>
<h1>Update People</h1>
<form noValidate onSubmit={onSubmit}>
  <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Full Name</td>
                <td><div>
              <input
                type='text'
                name='fullName'
                value={people.fullName}
                onChange={onChange}
              />
            </div></td>
              </tr>
              <tr>
                <td>Name With Initials</td>
                <td><div>
                              <input
                type='text'
                placeholder='ISBN'
                name='nameWithInitials'
                value={people.nameWithInitials}
                onChange={onChange}
              />
            </div></td>
              </tr>
              <tr>
                <td>Gender</td>
                <td><div>
  <select
    name='gender'
    value={people.gender}
    onChange={onChange}
  >
    <option value=''>Select Gender</option>
    <option value='male'>Male</option>
    <option value='female'>Female</option>
    <option value='other'>Other</option>
  </select>
</div></td>
              </tr>
              <tr>
                <td>Email</td>
                <td><div>
  <input
    type='email'
    placeholder='email'
    name='email'
    value={people.email}
    onChange={onChange}
    required
  />
</div></td>
              </tr>
              <tr>
                <td>Designation</td>
                <td><div>
              <input
                type='text'
                name='designation'
                value={people.designation}
                onChange={onChange}
              />
            </div></td>
              </tr>
              <tr>
                <td>Join Date</td>
                <td><div>
  <input
    type='date'
    placeholder='joinDate'
    name='joinDate'
    value={people.joinDate}
    onChange={onChange}
    required
  />
</div></td>
              </tr>
              <tr>
                <td>Salary</td>
                <td><div>
              <input
                type='text'
                name='salary'
                value={people.salary}
                onChange={onChange}
              />
            </div></td>
              </tr>
              <tr>
                <td>Personal Notes</td>
                <td><div>
  <textarea
    name='personalNotes'
    value={people.personalNotes}
    onChange={onChange}
    required
  />
</div></td>
              </tr>
              <tr>
                <td>Preferred Name</td>
                <td><div>
              <input
                type='text'
                name='preferredName'
                value={people.preferredName}
                onChange={onChange}
              />
            </div></td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td><div>
  <input
    type='date'
    name='dateOfBirth'
    value={people.dateOfBirth}
    onChange={onChange}
    required
  />
</div></td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td><div>
              <input
                type='text'
                name='mobileNumber'
                value={people.mobileNumber}
                onChange={onChange}
              />
            </div></td>
              </tr>
              <tr>
                <td>Employee Type</td>
                <td><div>
  <select
    id='employeeType'
    name='employeeType'
    value={people.employeeType}
    onChange={onChange}
  >
    <option value=''>Select employee type</option>
    <option value='Full Time'>Full-time</option>
    <option value='Part Time'>Part-time</option>
    <option value='Contract basic'>Contractor</option>
    <option value='Other'>Other</option>
  </select>
</div></td>
              </tr>
              <tr>
                <td>Experience</td>
                <td> <div>
  <select
    id='experience'
    name='experience'
    value={people.experience}
    onChange={onChange}
  >
    <option value=''>Select experience level</option>
    <option value='entryLevel'>Entry Level</option>
    <option value='midLevel'>Mid Level</option>
    <option value='seniorLevel'>Senior Level</option>
  </select>
</div></td>
              </tr>
            </tbody>
            
          </Table>
          <div style={{textAlign:"center"}}><button
      type='submit'
      style={{
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "10px 20px",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 4px",
        cursor: "pointer",
      }}
    >
      Update
    </button>
   <button type='submit' style={{
        backgroundColor: "red",
        border: "none",
        color: "white",
        padding: "10px 20px",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 4px",
        cursor: "pointer",
      }}>Back</button></div>
          </form>
</div>
);
}

export default UpdatePeople;