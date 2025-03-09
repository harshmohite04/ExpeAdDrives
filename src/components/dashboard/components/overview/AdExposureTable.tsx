import { motion } from 'framer-motion';
// import { Tooltip } from 'react-tooltip';

const adData = [
	{
		vehicle: 'Truck A',
		peopleSawDaily: 1500,
		exposureDuration: '6 hours',
		totalPossibleConversion: '300-450'
	},
	{
		vehicle: 'Truck B',
		peopleSawDaily: 1200,
		exposureDuration: '5 hours',
		totalPossibleConversion: '240-360'
	},
	{
		vehicle: 'Truck C',
		peopleSawDaily: 1000,
		exposureDuration: '4.5 hours',
		totalPossibleConversion: '200-300'
	}
];

const AdExposureTable = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Ad Exposure Overview</h2>
			<div className='overflow-x-auto'>
				<table className='table-auto w-full text-gray-100'>
					<thead>
						<tr className='bg-gray-700'>
							<th className='px-4 py-2'>Vehicle Name</th>
							<th className='px-4 py-2'>People Saw Daily</th>
							<th className='px-4 py-2'>Ad Exposure Duration</th>
							<th className='px-4 py-2'>Total Possible Conversion</th>
						</tr>
					</thead>
					<tbody>
						{adData.map((ad, index) => (
							<tr key={index} className='border-b border-gray-700'>
								<td className='px-4 py-2'>{ad.vehicle}</td>
								<td className='px-4 py-2'>{ad.peopleSawDaily}</td>
								<td className='px-4 py-2'>{ad.exposureDuration}</td>
								<td className='px-4 py-2'>{ad.totalPossibleConversion}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default AdExposureTable;
