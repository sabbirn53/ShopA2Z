import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import Home from './components/Home/Home.jsx'
import Blog from './components/Blog/Blog.jsx'
import Shop from './components/Shop/Shop.jsx'


const router=createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      { path: "/", element: <Home/> },
      {path:"/blog", element:<Blog/>},
      {path:"/shop", element:<Shop/>}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
