export function UserList() {   

    return(
        <div>
        
        <div className="container my-5">
    <h2 className="mb-4 text-center">User List</h2>
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>john.doe@example.com</td>
          <td>Administrator</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane Smith</td>
          <td>jane.smith@example.com</td>
          <td>Editor</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Mike Johnson</td>
          <td>mike.johnson@example.com</td>
          <td>Viewer</td>
        </tr>
      </tbody>
    </table>
  </div>
    </div>
    );
 }