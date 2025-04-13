import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../Constants/appconstants";
import { useEffect, useState } from "react";
import axios from "axios";
import { User, UserResponse } from "../Types/UserType";

export const EditUser = () => {
    const { id, edit } = useParams();
    console.log(id, edit);
    const [user, setUser] = useState<UserResponse | null>();
    const navigate = useNavigate();
    useEffect(() => {
        if (id != null || id != undefined) {
            axios.get(API_URL + 'api/User/' + id)
                .then((response) => {
                    if (response.data.status === true) {
                        const modifiedData = {
                            ...response.data,
                            createdDate: new Date(response.data.createdDate).toLocaleDateString('en-US'),
                            updatedDate: new Date(response.data.updatedDate).toLocaleDateString('en-US'),
                        };
                        setUser(modifiedData);
                    }
                }).catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        console.log(id, value);
        setUser(
            { ...user, entity: { ...user?.entity, [id]: value } } as UserResponse
        );
    }
    const SaveUserProfile = (user: User | undefined) => {
        axios.post(API_URL + 'api/User', user)
            .then((response) => {
                if (response.data.status === true) {
                    alert("User Profile Updated Successfully");
                } else {
                    alert("Error updating user profile: " + response.data.returnMessage);
                }
            })
            .catch(error => {
                console.error('Error updating user data:', error);
                alert("Error updating user profile: " + error.message);
            }
            );
    }
    const CreateUserProfile = (user: User | undefined) => {
        axios.post(API_URL + 'api/User/CreateUser', user)
            .then((response) => {
                if (response.data.status === true) {
                    alert("User Profile Updated Successfully");
                    navigate('/users');
                } else {
                    alert("Error updating user profile: " + response.data.returnMessage);
                }
            })
            .catch(error => {
                console.error('Error updating user data:', error);
                alert("Error updating user profile: " + error.message);
            }
            );
    }
    const NavigatetoUsers = () => {
        navigate('/users');
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm">
                        <div className="card-header bg-primary text-white">
                            <h4 className="mb-0">{edit} Profile</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter full name" value={user?.entity.name} onChange={handleChange} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" value={user?.entity.email} onChange={handleChange} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="Enter Address" value={user?.entity.address} onChange={handleChange} />
                                </div>



                                <div className="mb-3">
                                    <label className="form-label">City</label>
                                    <input type="text" className="form-control" id="city" placeholder="Enter City" value={user?.entity.city} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Designation</label>
                                    <input type="text" className="form-control" id="designation" placeholder="Enter Designation" value={user?.entity.designation} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">About</label>
                                    <input type="text" className="form-control" id="about" placeholder="Enter About" value={user?.entity.about} onChange={handleChange} />
                                </div>



                                <div className="d-flex justify-content-end">
                                    {edit == 'Edit' ? <button type="submit" onClick={() => SaveUserProfile(user?.entity)} className="btn btn-success me-2">Save Changes</button> :
                                        <button type="submit" onClick={() => CreateUserProfile(user?.entity)} className="btn btn-success me-2">Create User</button>}
                                    <button type="reset" onClick={NavigatetoUsers} className="btn btn-outline-secondary">Go to Users</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}