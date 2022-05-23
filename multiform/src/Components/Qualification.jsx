import React from "react";
import './Signup.css'
export const Qualification = ({ formData, setFormData }) =>
{
  return (
    <div className="sing-up">
      <label>
        Qualification : 
        <select  onChange={(e) => {
          setFormData({ ...formData, qualification: e.target.value });
        }}>
          <option value={"Post Graduate"}>Post Graduate</option>
          <option value={"Graduate"}>Graduate</option>
          <option value={"Senior Secondary"}>Senior Secondary</option>
        </select>
      </label>
      <input
        type="text"
        placeholder="College Name : "
        value={formData.college}
        onChange={(e) => {
          setFormData({ ...formData, college: e.target.value });
        }}
      />
      <input
        type="number"
        placeholder="Roll No. : "
        value={formData.rollno}
        onChange={(e) => {
          setFormData({ ...formData, rollno: e.target.value });
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
      <input
        type="text"
        placeholder="Percentage : "
        value={formData.marks}
        onChange={(e) => {
          setFormData({ ...formData, marks: e.target.value });
        }}
      />     

    </div>
  );
}
