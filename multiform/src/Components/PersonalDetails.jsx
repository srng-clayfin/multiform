import React from "react";
import './Signup.css'
export const PersonalDetails = ({ formData, setFormData }) =>
{
  return (  
    <div className="sing-up">
      <input
        type="text"
        placeholder="Address : "
        value={formData.address}
        onChange={(e) => {
          setFormData({ ...formData,  address: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Father Name : "
        value={formData.fathername}
        onChange={(e) => {
          setFormData({ ...formData, fathername: e.target.value });
        }}
      />
      
      Date Of Birth : <input type="date" value={formData.dob} onChange={(e) => {
          setFormData({ ...formData, dob: e.target.value });
        }} />

      <input
        type="text"
        placeholder="Aadhar No. : "
        value={formData.adharno}
        onChange={(e) => {
          setFormData({ ...formData, adharno: e.target.value });
        }}
        />
         <div onChange={(e) => setFormData({ ...formData,  disability:e.target.value })} >
        Disability : 
        <input type="radio" value="Yes" name="disability" /> Yes
        <input type="radio" value="No" name="disability" /> No
        
      </div>
    </div>
  );
}
