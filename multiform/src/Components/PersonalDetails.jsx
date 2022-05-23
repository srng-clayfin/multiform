import React from "react";
import './Personal.css'
export const PersonalDetails = ({ formData, setFormData }) =>
{
  return (  
    <div className="Personal-info">
      <input
        type="text"
        placeholder="College Name : "
        value={formData.college}
        onChange={(e) => {
          setFormData({ ...formData, college: e.target.value });
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
      <input
        type="number"
        placeholder="Passing Year : "
        value={formData.passingyr}
        onChange={(e) => {
          setFormData({ ...formData, passingyr: e.target.value });
        }}
      />
      Date Of Birth : 
      <input type="date" value={formData.dob} onChange={(e) => {
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
    </div>
  );
}
