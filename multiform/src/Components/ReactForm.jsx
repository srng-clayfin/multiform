import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import {UserInformation} from "./UserInformation";
import './ReactForm.css'
import { Details } from "./Details";
export default function ReactForm() {
  const [page, setPage] = useState(0);
  const currentPage = ["User Information", "Qualification","Personal Details"];

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    qualification:"",
    college:"",
    rollno:"",
    passingyr:"",
    marks:"",
    address:"",
    fathername:"",
    dob:"",
    adharno:"",
    disability:""    
  });

  console.log(formData);

  const DispalyOnTheBasisOfPage = () => {
    if (page === 0) {
      return <UserInformation formData={formData} setFormData={setFormData} />;
    } 
    else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    }
    else if (page === 2) {
    return <Details />    
  }
  };
  
  return (
    <div>
      <div className="form">
        

        <div className="form-container">
          <div className="Header"><h2>{currentPage[page]}</h2></div>
          <div className="formbody">{DispalyOnTheBasisOfPage()}</div>
          <div className="footer">
            <button
              disabled={page == 0}
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Prev
            </button>
            <button
              
              onClick={() => {
                  if(page===currentPage.length-1)
                  {
                        console.log(formData)
                        setPage(0);
                  }
                  else
                  {

                      setPage(page + 1);
                  }
              }}
            >
              {page===currentPage.length-1?"Submit":"Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
