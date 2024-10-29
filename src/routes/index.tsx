import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error-page/Error';
import Dashboard from '../pages/dashboard';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
		errorElement: <ErrorPage />,
	},
]);
