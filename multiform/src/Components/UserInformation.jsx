import React, { useState } from "react";
import './Signup.css'
export const UserInformation = ({ formData, setFormData }) =>
{

  const [gender, setGender] = useState();

  const handleChange = e => {
    const target = e.target;
    if (target.checked) {
      setGender(target.value);
    }
 };

 console.log(gender);

  return (
    <div className="sing-up">
      <input
        type="text"
        placeholder="First Name : "
        value={formData.fname}
        onChange={(e) => {
        setFormData({ ...formData, fname:e.target.value });
        }}
      />
       <input
        type="text"
        placeholder="Last Name : "
        value={formData.lname}
        onChange={(e) => {
        setFormData({ ...formData, lname:e.target.value });
        }}
      />
       <input
        type="email"
        placeholder="Email : "
        value={formData.email}
        onChange={(e) => {
        setFormData({ ...formData, email:e.target.value });
        }}
      />
       <input
        type="tel"
        placeholder="Contact No. : "
        value={formData.mobile}
        onChange={(e) => {
        setFormData({ ...formData,  mobile:e.target.value });
        }}        
      />
      <div onChange={(e) => setFormData({ ...formData,  gender:e.target.value })} >
        Gender : 
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>    
    </div>
  );
}
