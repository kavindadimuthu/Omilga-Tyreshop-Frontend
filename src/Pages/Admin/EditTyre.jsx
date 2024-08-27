import React from 'react'
import AdminHeader from '../../Components/AdminHeader'
import AdminUpdateFiltermenu from '../../Components/AdminUpdateFiltermenu-2'

function EditTyre() {
  return (
    <>
        <AdminHeader />
        <>
        <div className='w-[85vw] px-[5vw] py-4 mx-auto my-4 bg-slate-200 rounded-xl'><AdminUpdateFiltermenu /></div>
        </>
    </>
    
  )
}

export default EditTyre