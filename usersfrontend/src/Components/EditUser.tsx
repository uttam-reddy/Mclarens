export const EditUser = () => {
    return(
        <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">Edit Profile</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label  className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullName" placeholder="Enter full name" value="Jane Doe"/>
              </div>

              <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control" id="emailAddress" placeholder="Enter email" value="jane.doe@example.com"/>
              </div>

              <div className="mb-3">
                <label  className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="phoneNumber" placeholder="Enter phone number" value="+1 234 567 8900"/>
              </div>

              <div className="mb-3">
                <label  className="form-label">Role</label>
                <select className="form-select" id="userRole">
                  <option selected>Software Engineer</option>
                  <option>Manager</option>
                  <option>Team Lead</option>
                  <option>Designer</option>
                </select>
              </div>

              <div className="mb-3">
                <label  className="form-label">Bio</label>
                <textarea className="form-control" id="bio" rows={4}>Jane is an experienced developer with a passion for UI/UX and frontend technologies.</textarea>
              </div>

              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-success me-2">Save Changes</button>
                <button type="reset" className="btn btn-outline-secondary">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}