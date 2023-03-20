import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPeople from './AddPeople'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

import { Link } from "react-router-dom";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from "react-bootstrap";

function ViewAllPeoples() {
    const [getpeopledata, setPeopledata] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(5);
const totalPages = Math.ceil(getpeopledata.length / itemsPerPage);



  const getdata = async () => {
    const res = await axios.get("http://localhost:5000/people/view");
    console.log(res.data);

    if (res.status === 422 || !res) {
      console.log("error ");
    } else {
      setPeopledata(res.data.getpeopledata);

      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function deletePeople(element) {
    try {
      if (window.confirm("This Employee Will Be Deleted!")) {
        await axios
          .delete(`http://localhost:5000/people/delete/${element._id}`)
          .then((res) => {

            if (res.status === 201) {
              alert("Deleted successfully....");
              getdata();
            }
          });
      }
    } catch (error) {

      alert(error);
    }
  }


  return (
 
      <section>
   
   <div class="container">

     <div class="row mt-3">
     <div class="col-sm-8">
        <h5 class="text-center  ml-4 mt-4  mb-5">People</h5>
        <div class="input-group mb-4 mt-3">
        
        </div>
        <div style={{float:"left", width:"50%"}}>
        <form>
    <select
  style={{ marginLeft:"250px"}}
  name="searchQuery"
  onChange={(event) => {
    setSearchTerm(event.target.value);
  }}
>
  <option value="">Employee Types</option>
  <option value="Full Time">Full Time</option>
  <option value="Part Time">Part Time</option>
  <option value="Contarct Basic">Contarct Basic</option>
  <option value="Other">Other</option>
</select>
                  </form>  
                  </div>
                  <div style={{float:"left", width:"50%"}}>
                 {<AddPeople/>}
                 </div>
                  <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
        <table class="table table-hover  table-striped table-bordered ml-4 ">
            <thead>
            <tr>
                <th>Display Name</th>
                <th>Emp ID</th>
                <th>Designation</th>
                <th>Emp Type</th>
                <th>Experience</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {getpeopledata.filter((element) => {
                    if (searchTerm === "") {
                      return element;
                    } else if (
                      element.employeeType.toLowerCase().includes(
                        searchTerm.toLowerCase()
                      )
                    ) {
                      return element;
                    } else {

                      return false;
                    }
                  }).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((element, id) => {
              return (
                <tr>
                    <td><Link to={`/view/${element._id}`}>{element.preferredName}</Link></td>
                  <td>000{id+1}</td>
                  <td>{element.designation}</td>
                  <td>{element.employeeType}</td>
                  <td>{element.experience}</td>
                  <td><a style={{textDecoration:"none", marginRight:"10px"}} href={`/update/${element._id}`}>Edit</a>
                  <a style={{color:"red"}} onClick={() => deletePeople(element)}>Delete</a></td>
                </tr>
              );
            })}
          </tbody>
         <div> {currentPage > 1 && (
  <Button
    variant="primary"
    onClick={() => setCurrentPage(currentPage - 1)}
  >
    Previous
  </Button>
)}
{currentPage < totalPages && (
  <Button
    variant="primary"
    onClick={() => setCurrentPage(currentPage + 1)}
  >
    Next
  </Button>
)}</div>

        </table>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
      </div>
      </div>
      </div>
      </section>

  );
}
export default ViewAllPeoples
