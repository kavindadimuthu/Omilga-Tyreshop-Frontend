import { React, useState } from 'react';
import getUsers, { getLength } from '../data/mockdata';
import { Pagination } from 'antd';

// Define reusable class strings
const cellClass = 'border-collapse border border-slate-700 px-6 py-2';
const headerClass = 'border-collapse border border-slate-600 px-6 py-4';

const TableHeader = () => (
  <thead>
    <tr>
      <th className={headerClass}>id</th>
      <th className={headerClass}>full_name</th>
      <th className={headerClass}>first_name</th>
      <th className={headerClass}>last_name</th>
      <th className={headerClass}>email</th>
      <th className={headerClass}>ip_address</th>
    </tr>
  </thead>
);

const TableRow = ({ user }) => (
  <tr key={user.id}>
    <td className={cellClass}>{user.id}</td>
    <td className={cellClass}>{user.full_name}</td>
    <td className={cellClass}>{user.first_name}</td>
    <td className={cellClass}>{user.last_name}</td>
    <td className={cellClass}>{user.email}</td>
    <td className={cellClass}>{user.ip_address}</td>
  </tr>
);

async function fetchUsers() {
  try {
    // Fetching the data from the JSON file
    const response = await fetch('/data/mockdata.json');
    
    // Parsing the JSON response
    const data = await response.json();
    
    // Returning the data
    return data;
  } catch (error) {
    // Handling errors
    console.error('Error fetching users:', error);
  }
}

// Using the fetchUsers function
fetchUsers().then(users => {
  // console.log(users); // Output the users data
});


function Userpage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const users = getUsers(page, limit) || []; // Ensure users is always an array
  const userCount = getLength();

  const onShowSizeChange = (current, pageSize) => {
    setLimit(pageSize);
    setPage(current);
  };

  const showTotal = (total, range) => {
    return `${range[0]}-${range[1]} of ${total} items`;
  };

  return (
    <div className='flex flex-col items-center w-full'>
      <table className='mt-10 table-auto border-collapse border border-slate-500'>
        <TableHeader />
        <tbody>
          {users.length > 0 ? (
            users.map(user => user && <TableRow key={user.id} user={user} />)
          ) : (
            <tr>
              <td colSpan="6" className={`${cellClass} text-center`}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        current={page}
        pageSize={limit}
        total={userCount}
        onChange={setPage}
        showTotal={showTotal}
      />
    </div>
  );
}

export default Userpage;