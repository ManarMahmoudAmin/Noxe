import './App.css';
import { useContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Movies from './Component/Movies/Movies';
import Tv from './Component/Tv/Tv';
import People from './Component/People/People';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import ItemDetails from './Component/ItemDetails/ItemDetails';
import Profile from './Component/Profile/Profile';
import Error from './Component/Error/Error';
import MediaContextProvider from './Context/MediaContext';
import { AuthContext } from './Context/AuthContext';

export default function App() {
  let {userData, setUserData, saveUserData} = useContext(AuthContext);
  
  let routing = createBrowserRouter([
    {path:'/', element:<Layout setUserData={setUserData} userData={userData}/>, children:[
      {path:'register', element:<Register/>},
      {path:'login', element:<Login saveUserData={saveUserData}/>},
      {path:'profile', element: <ProtectedRoute><Profile userData={userData}/></ProtectedRoute>},
      {index:true, element:<ProtectedRoute><Home/></ProtectedRoute>},
      {path:'movies', element:<ProtectedRoute><Movies/></ProtectedRoute>},
      {path:'tv', element:<ProtectedRoute><Tv/></ProtectedRoute>},
      {path:'people', element:<ProtectedRoute><People/></ProtectedRoute>},
      {path:'itemdetails/:id/:media_type', element:<ProtectedRoute><ItemDetails/></ProtectedRoute>},
      {path: '*', element:<Error/>}
    ]}
  ])

  return (
    <MediaContextProvider>
      <RouterProvider router={routing}/>
    </MediaContextProvider>
  )
}


