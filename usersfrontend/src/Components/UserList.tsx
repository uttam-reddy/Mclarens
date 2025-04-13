import {  useEffect, useState } from "react";
import axios from "axios";
import {API_URL} from "../Constants/appconstants";
import {UsersResponse} from "../Types/UserType";
import './assets/css/UserList.css';
import { useNavigate } from "react-router-dom";
export function UserList() {   
   const navigate=useNavigate();

   
   const [users, setUsers] = useState<UsersResponse | null >();
    useEffect(() => {
      axios.get(API_URL + 'api/User')
        .then((response ) => {
          if(response.data.status === true) {
            const modifiedData = {
              ...response.data,
              entity: response.data.entity.map((user: any) => ({
                ...user,
                createdDate: new Date(user.createdDate).toLocaleDateString('en-US'),
                updatedDate: new Date(user.updatedDate).toLocaleDateString('en-US'),
              })),
            };
            setUsers(modifiedData);
            
          }

           // Handle the user data here
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        }
        );
    },[]);

     const NavigatetoUserProfile = (id : string) => {
             navigate(`/user/${id}`);
         }
      const NavigatetoAddUser= () => {
              navigate(`/user/Add/0`);
      }    

      const DeleteUser = (id : string) => {
        axios.delete(API_URL + 'api/User/' + id)
          .then((response) => {
            if (response.data.status === true) {
              alert("User Deleted Successfully");
              // setUsers((prevState) => {
              //   if (!prevState || !prevState.entity) return prevState;
              //   return {
              //     ...prevState,
              //     entity: prevState.entity.filter((user: any) => user.id !== id),
              //   };
              // });
              setUsers((prevState) => {
                if (!prevState || !prevState.entity) return prevState;
                return{
                  ...prevState,
                  entity:prevState.entity.filter((user: any) => user.id !== id),
                }

              })
            } else {
              alert("Error deleting user: " + response.data.returnMessage);
            }
          }).catch(error => {
            console.error('Error deleting user:', error); 
            alert("Error deleting user: " + error.message);
          });
        }

        // Fetch user data from an API or perform any other side effects here 

    return(
        <div>
        <div className="container my-5">
        <button type="reset" onClick={NavigatetoAddUser} style={{ marginLeft: "90%",color:'white',backgroundColor:'black' }} className="btn btn-outline-secondary">Add User</button>

    <h2 className="mb-4 text-center">User List</h2>
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Address</th>
          <th>CreatedDate</th>
          <th>UpdatedDate</th>
          <th>Delete</th>

        </tr>
      </thead>
      <tbody>
        {users?.entity?.map((user, index) => 
        ( 
           <tr>
           <td >{index+1}</td>
           <td className="user-name" onClick={() => NavigatetoUserProfile(user.id)}>{user.name}</td>
           <td >{user.email}</td>
           <td>{user.city}</td>
           <td>{user.address}</td>
           <td >{user.createdDate}</td>
           <td >{user.updatedDate}</td>
           <td ><button  onClick={() => DeleteUser(user.id)} style={{ color:'white',backgroundColor:'black' }} className="btn btn-outline-secondary">Delete</button>
           </td>
         </tr>
        ))}
        
        
      </tbody>
    </table>
  </div>
    </div>
    );
 }