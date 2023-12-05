import logo from './logo.svg';
import './App.css';
import SignUp from './component/SignUp'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './component/Home';
import LogIn from './component/LogIn';
import List from './component/List';
import { Counter } from './features/counter/Counter';
import StudentView from './features/student/StudentView';


function App() {
  return (
    <div className="App">

      <Counter />
      {/* <List /> */}
      {/* <SignUp /> */}
    <Router>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/create' element={<StudentView />} />
        {/* <Route path='/post' element={<Post />} /> */}
        {/* <Route path='/home' element={<Home />} /> */}
        {/* <Route path='/signup' element={<SignUp />} /> */}
        {/* <Route path='/' element={<LogIn />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
