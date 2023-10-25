
import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './composants/users/Users'
import CreateUser from './composants/createUser/CreateUser'
import UpdateUser from './composants/updateUser/updateUser'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/create' element={<CreateUser/>}/>
        <Route path='/update/:id' element={<UpdateUser/>}/>

        
      </Routes>
      
    </>
  )
}

export default App
