import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import Profile from '../pages/Profile';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
    {path:"/", element : <HomePage/>},
    {path:"/login", element : <LoginPage/>},
    {path:"/profile", element : <Profile/>},
    {path:"*", element : <NotFoundPage/>}
])

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
