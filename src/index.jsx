import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import App from './App'

const router = createBrowserRouter([

  {
    path:'/',
    element:<App />,
    children: [
      {
        path:'/',
        element:<Layout />,
        children:[
          {
            path:'/home',
            element:<Home/>,
          },
        ]
      }
    ]
  }
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>
);
