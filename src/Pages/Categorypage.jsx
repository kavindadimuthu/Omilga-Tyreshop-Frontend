import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

async function fetchUsers() {
  try {
    // Fetching the data from the JSON file
    const response = await fetch('../data/users.json');
    
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
  console.log(users); // Output the users data
});

function Categorypage() {
  return (
    <div>
      <Header />
      Categorypage

      <Footer />
    </div>
  )
}

export default Categorypage


// Function to fetch users data



