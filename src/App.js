import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Lists from "./pages/Lists";
import Tasks from "./pages/Tasks";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import './styles/App.css';
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/lists' element={<Lists />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
