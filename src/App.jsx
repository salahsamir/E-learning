
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Registar from './Components/Registar/Registar.jsx';

function App() {
 const router=createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {path:"home",element:<Home/>},
    {path:'/login',index:true,element:<Login/>},
    {path:"registar",element:<Registar/>},
  ]}
 ])
   return (
   <>
  

   <RouterProvider router={router}/>   
 
   </>
  );
}

export default App;
