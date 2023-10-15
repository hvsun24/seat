import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Seat from '../page/seat';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <Seat />,
			},
		],
	},
]);

export default router;
