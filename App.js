//import logo from './logo.svg';

// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Filter from './component/Filter';
import Home from './component/Home';
import Light from './component/Light';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Other from './component/Other';
import Protected from './component/Protected';
import Services from './component/Services';
import User from './component/User';
import { BrowserRouter, Routes, Navigate, Route, Link } from 'react-router-dom';
import Getapi from './Getapi';
// import Page404 from './component/Page404';

// import  Map  from './Map';

function App() {
  let users = [
    {id:1,name:"mahammad",email:"mah@gmail.com" },
    {id:2,name:"mahedi",email:"ma@gmail.com" },
    {id:3,name:"akmal",email:"ak@gmail.com" },
    {id:4,name:"hasan",email:"ha@gmail.com" },
    {id:5,name:"farman",email:"fa@gmail.com" },
]

       

  return (
    <div className="App">


      <BrowserRouter>
      <Navbar />
      <Getapi />
      {
    users.map((item,i)=>
    <div key={i}><Link to={'/user/'+item.id}>{item.name}</Link></div> )

}
        <Routes>

          <Route path='/' element={<Protected Component={Home} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/About' element={<About />} />
          {/* <Route path='/*' element={<Navigate to='/' />} /> */}
          <Route path='/user:id' element={<User />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/services/' element={<Services />} />
          <Route path='/light' element={<Light />} />
          <Route path='/other' element={<Other />} />
          {/* <Route path='/*' element={<Page404 />} /> */}

        </Routes>
      </BrowserRouter>

      {/* <Map /> */}
    </div>
  );
}

export default App;




/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React with mk
</a>
</header> */