export const Details = ({formData}) =>
{
    const d = formData()
    // fname: "",
    // lname: "",
    // email: "",
    // mobile: "",
    // gender: "",
    // qualification:"",
    // college:"",
    // rollno:"",
    // passingyr:"",
    // marks:"",
    // address:"",
    // fathername:"",
    // dob:"",
    // adharno:"",
    // disability:""    
    return(
        <div className="details">
            <h3>Full Name : {formData.fname+" "+formData.lname}</h3>
            <h3>Email : {formData.email}</h3>
            <h3>Contact No : {formData.mobile}</h3>
            <h3>DOB : {formData.dob} Gender : {formData.gender}</h3>
            <h3>Aadhar No. : {formData.adharno}</h3>
            <h3>Address : {formData.address}</h3>
            <h3>Father Name : {formData.fathername}</h3>
            <h3>Qualification : {formData.qualification} Passing Year : {formData.passingyr}</h3>
            <h3>Marks : {formData.marks} Roll No. : {formData.rollno}</h3>
            <h3>College Name : {formData.college}</h3>
            <h3>Disability : {formData.disability}</h3>
        </div>
    )
}