import React from 'react';
import { useNavigate } from 'react-router-dom';
export function Users() {  
  const navigate=useNavigate();
  function ShowAllTeamMembers(){
    navigate('/users');
          
  }
    return(
        <div>
        <section className="py-5">
      <div className="container text-center">
        <h2>Welcome to McLarens</h2>
        <p className="lead">With an extensive global network, we are trusted by clients worldwide to deliver best-in-class claims management, loss adjusting, and risk mitigation services.</p>
                </div>
    </section>
            <section className="py-5 bg-light">
      <div className="container">
        <h3 className="text-center mb-4">Featured Team Members</h3>
        <div className="row justify-content-center">
          <div className="col-md-6 team-member text-center p-4 bg-white">
            <img src="https://www.mclarens.com/wp-content/uploads/2021/03/Alberto-Levy.jpg" className="img-fluid rounded-circle mb-3" alt="Alberto Levy" width="150"/>
            <h4>Alberto Levy</h4>
            <p className="text-muted">Senior Loss Adjuster</p>
            <p>Alberto brings over two decades of experience in handling complex claims across various industries. His commitment to excellence ensures that clients receive the highest standard of service.</p>
            <button style={{backgroundColor:'black',color:'white'}} onClick={ShowAllTeamMembers}>See All team members</button>
          </div>
          
        </div>
      </div>
    </section>
    </div>
    );
 }