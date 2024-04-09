import React from 'react'
import Head from '../../component/Head';
import Heads from '../../pageComponents/main/Main';
import Main from '../../pageComponents/main/Main';
const AdminDashboard = ({...props}) => {
  return (
<>
<Head title="deals-dashboard"/>
<Heads/>
  {/* <Main {...props}/> */}
</>
  )
}

export default AdminDashboard;