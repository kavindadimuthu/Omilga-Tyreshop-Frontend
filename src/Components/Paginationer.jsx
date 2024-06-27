import React from 'react';
import { Pagination } from 'antd';

const Paginationer = () => 

    <div className='w-[75vw] m-auto py-2 flex justify-end border-solid border-b-2 border-gray-400'>
        <Pagination defaultCurrent={1} total={600} />
    </div>;

export default Paginationer;