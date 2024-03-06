import React from 'react';



const UserTable = ({users, onEdit}) => {
  const handleEditClick = (userId) => {
    onEdit(userId); // Call the prop function
  };
    //console.log(users);
  return (
    <div className="overflow-x-auto rounded-md shadow-md">
      <table className="table table-striped w-full">
        <thead>
          <tr>
            <th className="text-left px-4 py-2">
              <input type="checkbox" />
            </th>
            <th className="text-left px-4 py-2">ID</th>
            <th className="text-left px-4 py-2">Name</th>
            <th className="text-left px-4 py-2">Phone Number</th>
            <th className="text-left px-4 py-2">Email</th>
            <th className="text-left px-4 py-2">Hobbies</th>
            <th className="text-left px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
            <tr key={user._id} className="hover:bg-gray-100">
              <td className="text-left px-4 py-2">
                <input type="checkbox" /*checked={onSelect && onSelect(user._id)} onChange={() => onSelect && onSelect(user._id)} *//>
              </td>
              <td className="text-left px-4 py-2">{user._id}</td>
              <td className="text-left px-4 py-2">{user.name}</td>
              <td className="text-left px-4 py-2">{user.phoneNumber}</td>
              <td className="text-left px-4 py-2">{user.email}</td>
              <td className="text-left px-4 py-2">{user.hobbies}</td>
              <td className="text-left px-4 py-2 flex space-x-2">
                <button className="btn btn-sm btn-warning" onClick={ () => handleEditClick(user._id)}>Edit</button>
                {console.log(user._id)}
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
