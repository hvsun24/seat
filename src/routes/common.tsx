import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Seat from '../page/seat/seat';
import TotalSeat from '../page/totalSeat/totalSeat';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <Seat />,
			},
			{
				path: 'total',
				element: <TotalSeat />,
			},
		],
	},
]);

export default router;
