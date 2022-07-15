import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import teacherService from '../services/teacher.service';
import './teacherList.css'

const TeacherList = () => {

  const [teachers, setTeachers] = useState([]);

  const init = () => {
    teacherService.getAll()
      .then(response => {
        console.log('Printing teachers data', response.data);
        setTeachers(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    teacherService.remove(id)
      .then(response => {
        console.log('Teacher deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <h3 className='text-center'>List of Teachers</h3>
      <hr/>
      <div>
        <div className='text-center'>
        <Link to="/add" className="btn btn-primary mb-2">Add Teachers</Link>

        </div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Employee Code</th>
              <th>First name</th>
              {/* <th>Middle name</th> */}
              <th>Last name</th>
              <th>Gender</th>
              <th>Date of birth</th>
              <th>Phone number</th>
              <th>Private email</th>
              <th>Nationality id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            teachers.map(teacher => (
              <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>{teacher.employeeCode}</td>
                <td>{teacher.firstName}</td>
                {/* <td>{teacher.middleName}</td> */}
                <td>{teacher.lastName}</td>
                <td>{teacher.gender}</td>
                <td>{teacher.dateOfBirth}</td>
                <td>{teacher.phoneNumber}</td>
                <td>{teacher.privateEmail}</td>
                <td>{teacher.nationality}</td>
                <td>
                  <Link className="btn btn-info" to={`/teachers/edit/${teacher.id}`}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(teacher.id);
                  }}><i className="fa fa-trash" aria-hidden="true"></i></button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default TeacherList;