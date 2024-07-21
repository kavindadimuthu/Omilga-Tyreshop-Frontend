import React , { useState , useEffect} from 'react';
import { Pagination } from 'antd';
import Productcard from '../Components/Productcard'

export default function Productlist() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState(15);

  async function fetchUsers() {
    try {
      const response = await fetch(`../data/products${page}.json`); // Fetching the data from the JSON file
      
      const jsonData = await response.json(); // Parsing the JSON response
      setData(jsonData);
  
    } catch (error) {
      console.error('Error fetching users:', error);  // Handling errors
    }
  }

  useEffect( () => {fetchUsers(page).then()}, [page] );

  const onShowSizeChange = (current, pageSize) => {
    setLimit(pageSize);
    setPage(current);
  };

  return (
    <>
    {data ? (
          <div className='grid grid-cols-4 gap-4 py-4'>
            {data.map(item => (
              <div key={item.tyreid}>

                <Productcard 
                  tyreurl={"singleproduct/"+ item.tyreid} 
                  tyreid={item.tyreid} 
                  tyrename={item.tyrename} 
                  image={item.image} 
                  sizeinfo={item.sizeinfo} 
                  oldprice={item.oldprice} 
                  newprice={item.newprice}/>

              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}

    <Pagination 
        total={24}
        pageSize={limit}
        current={page}
        onChange={setPage}
        showSizeChanger
        onShowSizeChange={onShowSizeChange} 
      />
      </> )}