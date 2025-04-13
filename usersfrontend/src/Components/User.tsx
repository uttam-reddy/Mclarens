import React, { useEffect, useState } from 'react';
import './assets/css/User.css'; // Import your CSS file for styling
import { UserResponse } from '../Types/UserType';
import axios from "axios";
import {API_URL} from "../Constants/appconstants";
import { useNavigate, useParams } from "react-router-dom";

export function User() {
    const navigate=useNavigate();

    const [user, setUser] = useState<UserResponse | null>();
    const { id } = useParams();
    useEffect(() => {
         axios.get(API_URL + 'api/User/'+id)
            .then((response ) => {
                if(response.data.status === true) {
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
    },[]);
    const EditProfile = (id : string | undefined) => {
        navigate(`/user/Edit/${id}`);
    }
    return (
        <div>
            <div className="profile-header">
                <h1>User Profile</h1>
            </div>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow">
                            <div className="card-body text-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg" alt="Profile Picture" className="profile-img mb-3"/>
                                    <h3>{user?.entity.name}</h3>
                                    <p className="text-muted">{user?.entity.designation}</p>
                                    <hr/>
                                        <div className="row text-start mt-4">
                                            <div className="col-sm-6 mb-3">
                                                <h6>Email</h6>
                                                <p>{user?.entity?.email}</p>
                                            </div>
                                            <div className="col-sm-6 mb-3">
                                                <h6>City</h6>
                                                <p>{user?.entity?.city}</p>
                                            </div>
                                            <div className="col-sm-12">
                                                <h6>About</h6>
                                                <p>{user?.entity?.about}</p>
                                            </div>
                                        </div>
                                        <a onClick={() => EditProfile(id)} className="btn btn-primary mt-3">Edit Profile</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    
}