import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

const vehicleData = [
	{
		vehicle: 'Truck A',
		totalDistance: 12400,
		dailyDistance: 400,
		source: 'New York',
		destination: 'Los Angeles',
		subRoutes: ['Philadelphia', 'Pittsburgh', 'Columbus', 'St. Louis']
	},
	{
		vehicle: 'Truck B',
		totalDistance: 10300,
		dailyDistance: 343,
		source: 'Houston',
		destination: 'Chicago',
		subRoutes: ['Dallas', 'Oklahoma City', 'Kansas City']
	},
	{
		vehicle: 'Truck C',
		totalDistance: 8900,
		dailyDistance: 296,
		source: 'Miami',
		destination: 'Atlanta',
		subRoutes: ['Orlando', 'Jacksonville', 'Macon']
	}
];

const VehicleDistanceTable = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Vehicle Distance Overview</h2>
			<div className='overflow-x-auto'>
				<table className='table-auto w-full text-gray-100'>
					<thead>
						<tr className='bg-gray-700'>
							<th className='px-4 py-2'>Vehicle Name</th>
							<th className='px-4 py-2'>Total Distance (Monthly)</th>
							<th className='px-4 py-2'>Distance/Day</th>
							<th className='px-4 py-2'>Route Pattern</th>
						</tr>
					</thead>
					<tbody>
						{vehicleData.map((vehicle, index) => (
							<tr key={index} className='border-b border-gray-700'>
								<td className='px-4 py-2'>{vehicle.vehicle}</td>
								<td className='px-4 py-2'>{vehicle.totalDistance} km</td>
								<td className='px-4 py-2'>{vehicle.dailyDistance} km</td>
								<td className='px-4 py-2'>
									<span
										className='text-blue-400 underline cursor-pointer'
										data-tooltip-id={`route-${index}`}
									>
										{vehicle.source} → {vehicle.destination}
									</span>
									<Tooltip id={`route-${index}`} className='bg-gray-700 text-gray-100 p-2 rounded-lg'>
										<b>Sub-Routes:</b><br />
										{vehicle.subRoutes.join(' → ')}
									</Tooltip>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default VehicleDistanceTable;