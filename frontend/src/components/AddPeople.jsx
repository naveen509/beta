import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const PeopledPeople = (props) => {
  const [fullName, setFullName] = useState("");
  const [nameWithInitials, setnameWithInitials] = useState("");
  const [gender, setgender] = useState("");
  const [email, setemail] = useState("");
  const [designation, setdesignation] = useState("");
  const [joinDate, setjoinDate] = useState("");
  const [salary, setsalary] = useState("");
  const [personalNotes, setpersonalNotes] = useState("");
  const [preferredName, setpreferredName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [employeeType, setemployeeType] = useState("");
  const [experience, setexperience] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      const PeopleData = {
        fullName,
        nameWithInitials,
        gender,
        email,
        designation,
        joinDate,
        salary,
        personalNotes,
        preferredName,
        dateOfBirth,
        mobileNumber,
        employeeType,
        experience
      };

      // validate email and mobileNumber
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
if (!emailRegex.test(email)) {
  alert("Please enter a valid email address.");
  return;
}

const mobileRegex = /^[0-9]{10}$/;
if (!mobileRegex.test(mobileNumber)) {
  alert("Please enter a valid mobile number.");
  return;
}

      const result = await axios.post(
        "http://localhost:5000/people/new",
        PeopleData
      );
      if (result?.status === 201) {
        alert("Success");
        hideModalHandler();
        navigate("/");
      }
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
      alert(err?.response?.data?.errorMessage);
    }
  };

  const resetForm = (e) => {
    setFullName("");
    setnameWithInitials("");
    setgender("");
    setemail("");
    setdesignation("");
    setjoinDate("");
    setsalary("");
    setpersonalNotes("");
    setpreferredName("");
    setdateOfBirth("");
    setmobileNumber("");
    setemployeeType("");
    setexperience("");
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div style={{ marginTop: "0px" }}>
      <Button variant="primary" onClick={showModalHandler}>
        Add People
      </Button>

      <Modal show={showModal} onHide={hideModalHandler} style={{marginRight:"100px"}}>
        <Modal.Header closeButton>
          <Modal.Title>Add People</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={register}>
          

<div style={{float:"left", width: "50%"}}>
<div> 
            <input
              type="text"
              placeholder="fullName"
              required
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
            </div> 
            <br/>
<div> 
                  <input
                    type="text"
                    placeholder="nameWithInitials"
                    required
                    onChange={(e) => setnameWithInitials(e.target.value)}
                    value={nameWithInitials}
                  />
                  </div> 
                  <br/>
<div> 
<select
  onChange={(e) => setgender(e.target.value)}
  value={gender}
  required
>
  <option value="">Select Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
</div> 
<br/>
       <div>     
<input
  type="email"
  placeholder="email"
  required
  onChange={(e) => setemail(e.target.value)}
  value={email}
/>
</div>
<br/>
<div> 
<input
                    type="text"
                    placeholder="designation"
                    required
                    onChange={(e) => setdesignation(e.target.value)}
                    value={designation}
                  />
   
   </div>
   <br/> 
          <div>  
   <input
  type="date"
  placeholder="joinDate"
  required
  onChange={(e) => setjoinDate(e.target.value)}
  value={joinDate}
/>
</div>
<br/>
<div>

<input
                    type="text"
                    placeholder="salary"
                    required
                    onChange={(e) => setsalary(e.target.value)}
                    value={salary}
                  />
                  </div>
                  <br/>
                  </div>
   
                  <div style={{float:"left", width: "50%"}}>
            <div>
                  <textarea
  placeholder="personalNotes"
  required
  onChange={(e) => setpersonalNotes(e.target.value)}
  value={personalNotes}
></textarea>

</div>
<br/>
<div>
<input
                    type="text"
                    placeholder="preferredName"
                    required
                    onChange={(e) => setpreferredName(e.target.value)}
                    value={preferredName}
                  />
                  </div>
                  <br/>
   
        
            <div>
   <input
  type="date"
  placeholder="dateOfBirth"
  required
  onChange={(e) => setdateOfBirth(e.target.value)}
  value={dateOfBirth}
/>
</div>
<br/>
<div>
<input
                    type="text"
                    placeholder="mobileNumber"
                    required
                    onChange={(e) => setmobileNumber(e.target.value)}
                    value={mobileNumber}
                  />
                  </div>
<br/>   
        
           <div> 
   <select
  onChange={(e) => setemployeeType(e.target.value)}
  value={employeeType}
  required
>
  <option value="">Select Employee Type</option>
  <option value="Full Time">Full-Time</option>
  <option value="Part Time">Part-Time</option>
  <option value="Contract Basic">Contract Basic</option>
  <option value="Other">Other</option>
</select>
</div>
<br/>
<div>
<select
  onChange={(e) => setexperience(e.target.value)}
  value={experience}
  required
>
  <option value="">Select Experience</option>
  <option value="1-3">1-3 years</option>
  <option value="4-6">4-6 years</option>
  <option value="7-9">7-9 years</option>
  <option value="10+">10+ years</option>
</select>

</div>
<br/>
</div>

            <a href="/"><Button variant="secondary">
              Cancel
            </Button></a>

            <Button variant="primary" type="submit">
              Add People
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PeopledPeople;
