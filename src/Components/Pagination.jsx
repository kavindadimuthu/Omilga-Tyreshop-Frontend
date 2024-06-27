import React from 'react'
import { useState } from 'react'
import users from '../data/mockdata'

function getUsers() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    let array = [];
    for (let i = (page - 1) * limit; i < page * limit; i++) {
        array.push(users[i]);
    }

  return array;
}

export default getUsers






