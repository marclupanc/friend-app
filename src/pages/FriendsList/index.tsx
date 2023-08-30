import Table from "react-bootstrap/Table";

const FriendsList = () => {
  return (
    <div className='m-lg-5'>
      <h2 className="">Friend List</h2>
      <Table striped bordered hover variant="dark" className="flex mt-5 w-50">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Twitter</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maxim Burduja</td>
            <td>masb@email.com</td>
            <td>+37312312312</td>
            <td>@max</td>
            <td>Add remove</td>
          </tr>
          <tr>
            <td>Anna Novicov</td>
            <td>ananovicov@email.com</td>
            <td>+373434321232</td>
            <td>@ana</td>
            <td>Add remove</td>
          </tr>
          <tr>
            <td>Dima Hinev</td>
            <td>dimma@email.com</td>
            <td>+373543556785</td>
            <td>@dima</td>
            <td>Add remove</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default FriendsList;
