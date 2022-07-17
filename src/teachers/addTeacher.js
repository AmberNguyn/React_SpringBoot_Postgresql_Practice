import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import teacherService from "../services/teacher.service";
import "../teachers/addTeacher.css";

const AddTeacher = () => {
  const [employeeCode, setEmployeeCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [privateEmail, setPrivateEmail] = useState("");
  const [schoolEmail, setSchoolEmail] = useState("");
  const [teacherType, setTeacherType] = useState("VIETNAMESE");
  const [gender, setGender] = useState("FEMALE");
  const [degree, setDegree] = useState("");
  const [nationalityId, setnationalityId] = useState("1");

  // const history = useNavigate();
  const { id } = useParams();

  const saveTeacher = (e) => {
    e.preventDefault();

    const teacher = {
      employeeCode: employeeCode,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      phoneNumber: phoneNumber,
      address: address,
      privateEmail: privateEmail,
      schoolEmail: schoolEmail,
      teacherType: teacherType,
      gender: gender,
      degree: degree,
      nationalityId: nationalityId,
    };

    console.log(teacher);

    if (id) {
      // update

      teacherService
        .update(id, teacher)
        .then((response) => {
          console.log("Teacher data updated successfully", response.data);
          // history.push("/teachers");
          console.log(response.data);
          showNotification();
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      //create
      teacherService
        .create(teacher)
        .then((response) => {
          console.log("teacher added successfully", response.data);
          // history.push("/teachers");
          showNotification();
        })
        .catch((error) => {
          console.log("something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      teacherService
        .get(+id)
        .then((teacher) => {
          setEmployeeCode(teacher.data.employeeCode);
          setFirstName(teacher.data.firstName);
          setMiddleName(teacher.data.middleName);
          setLastName(teacher.data.lastName);
          setDateOfBirth(teacher.data.dateOfBirth);
          setPhoneNumber(teacher.data.phoneNumber);
          setAddress(teacher.data.address);
          setPrivateEmail(teacher.data.privateEmail);
          setSchoolEmail(teacher.data.schoolEmail);
          setTeacherType(teacher.data.teacherType);
          setGender(teacher.data.gender);
          setDegree(teacher.data.degree);
          setnationalityId(teacher.data.nationalityId);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);


    const showNotification = () => {
      const h3 = document.createElement('h3');
      h3.innerHTML = 'Successfully added';
      const saveButton = document.querySelector('.save-button');
      saveButton.before(h3);
    }



  return (
    <div className="container">
      <h3 className="text-center">Add Teacher</h3>
      <hr />

      <form className="inputForm">
        <div className="row">
          {/* first column */}
          <div className="col first-col">
            <div className="form-group">
              <label htmlFor="employeeCode">Employee Code:</label>
              <input
                type="text"
                className="form-control col-6"
                id="employeeCode"
                value={employeeCode}
                onChange={(e) => setEmployeeCode(e.target.value)}
                placeholder="Enter employeeCode"
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                className="form-control col-6"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter first name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="middleName">Middle name:</label>
              <input
                type="text"
                className="form-control col-6"
                id="middleName"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                placeholder="Enter middle name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                className="form-control col-6"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter last name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of birth:</label>
              <input
                type="date"
                className="form-control col-6"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                placeholder="Enter last name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone number:</label>
              <input
                type="tel"
                className="form-control col-6"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                className="form-control col-6"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
              />
            </div>
          </div>

          {/* second column */}
          <div className="col">
            <div className="form-group">
              <label htmlFor="privateEmail">Private email:</label>
              <input
                type="email"
                className="form-control col-6"
                id="privateEmail"
                value={privateEmail}
                onChange={(e) => setPrivateEmail(e.target.value)}
                placeholder="Enter private email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="schoolEmail">School Email:</label>
              <input
                type="email"
                className="form-control col-6"
                id="schoolEmail"
                value={schoolEmail}
                onChange={(e) => setSchoolEmail(e.target.value)}
                placeholder="Enter school email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="teacherType">Teacher type:</label>
              <select
                id="teacherType"
                className="form-select col-6"
                onChange={(e) => {
                  setTeacherType(e.target.value);
                  console.log(e.target);
                }}
              >
                <option value={"VIETNAMESE"}>Vietnamese</option>
                <option value={"EXPATRIATE"}>Expatriate</option>
                <option value={"UNKNOWN"}>Unknown</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                className="form-select col-6"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value={"FEMALE"}>Female</option>
                <option value={"MALE"}>Male</option>
                <option value={"OTHER"}>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="degree">Degree:</label>
              <input
                type="text"
                className="form-control col-6"
                id="degree"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                placeholder="Enter highest degree"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nationalityId">Nationality: </label>
              <select
                value={nationalityId}
                className=" form-select col-6"
                id="nationalityId"
                onChange={(e) => {
                  setnationalityId(e.target.value);
                  console.log(e.target);
                }}
              >
                <option value={1}>United States</option>
                <option value={2}>Vietnamese</option>
                <option value={3}>Canadian</option>
                <option value={4}>United Kingdom - Scotland</option>
                <option value={5}>United Kingdom - Britain</option>
                <option value={6}>United Kingdom - Ireland</option>
                <option value={7}>United Kingdom - Wales</option>
              </select>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button
            onClick={(e) => saveTeacher(e)}
            className="btn btn-primary save-button"
          >
            Save
          </button>
        </div>
      </form>

      <div className="d-flex justify-content-center">
        <Link to="/teachers" className="btn btn-success back-to-list-button">
          Back to List
        </Link>
      </div>
    </div>
  );
};

export default AddTeacher;
