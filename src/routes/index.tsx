import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error-page/Error';
import Dashboard from '../pages/dashboard';
import SignUp from '../pages/sigup-page';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/signup',
		element: <SignUp />,
		errorElement: <ErrorPage />,
	},
]);
