import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UserList from './ReduxComp/users/UserList'
import AddUser from './ReduxComp/users/AddUser'
import EditUser from './ReduxComp/users/EditUser'

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path='/' element={<UserList />}></Route>
                    <Route exact path='/AddUser' element={<AddUser />}></Route>
                    <Route exact path='/EditUser' element={<EditUser />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App;