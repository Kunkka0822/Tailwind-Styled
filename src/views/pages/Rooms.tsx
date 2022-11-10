import React from 'react';
import { roomType } from '../../types/models/poker';
import roomData from '../../static/rooms.json';

export type RoomTableType = {
	data?: Array<roomType>;
}

const RoomTable = (props: RoomTableType) => {
	return (
		<div className="overflow-hidden overflow-x-auto rounded-md bg-DarkCard p-5">
			<table
				className="min-w-full text-sm dark:divide-gray-700"
			>
				<thead className="bg-DarkCard">
					<tr>
						<th
							className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-DarkBody"
						>
							<div className="flex items-center gap-2">
								Name
							</div>
						</th>
						<th
							className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-DarkBody"
						>
							<div className="flex items-center gap-2">
								Game
							</div>
						</th>
						<th
							className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-DarkBody"
						>
							<div className="flex items-center gap-2">
								Players
							</div>
						</th>
						<th
							className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-DarkBody"
						>
							<div className="flex items-center gap-2">
								Limit
							</div>
						</th>
						<th
							className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-DarkBody"
						>
							Stakes
						</th>
					</tr>
				</thead>

				<tbody className="">
					{
						Array.isArray(props.data) && props.data.map((item: roomType) => (
							<tr className="odd:bg-DarkBack even:bg-DarkCard hover:bg-[#1C2230]">
								<td
									className="whitespace-nowrap px-4 py-4 text-gray-900 dark:text-DarkBody font-[500]"
								>
									{item.name}
								</td>
								<td
									className="whitespace-nowrap px-4 py-4 text-gray-700 dark:text-DarkBody font-[500]"
								>
									{item.game}
								</td>
								<td
									className="whitespace-nowrap px-4 py-4 text-gray-700 dark:text-DarkBody font-[500]"
								>
									{`${item.curPlayers}/${item.maxPlayers}`}
								</td>
								<td
									className="whitespace-nowrap px-4 py-4 text-gray-700 dark:text-DarkBody font-[500]"
								>
									{item.limit}
								</td>
								<td className="whitespace-nowrap px-4 py-4 text-gray-700 dark:text-DarkBody font-[500]">
									{item.stakes}
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	);
}

const Rooms = () => {
	return (
		<div className='flex flex-col h-full bg-DarkBack p-5'>
			<div className='flex w-full gap-3 py-3'>
				<div className='text-DarkWhite p-2 bg-DarkCard rounded-md text-[14px] font-[500]'>Ring Games</div>
				<div className='text-DarkBody p-2 rounded-md text-[14px] font-[500]'>Tournaments</div>
				<div className='text-DarkBody p-2 rounded-md text-[14px] font-[500]'>Quick Play</div>
			</div>
			<div className='grow flex gap-6'>
				<div className='w-[60%]'>
					<RoomTable data={roomData} />
				</div>
				<div className='grow flex flex-col h-full gap-6'>
					<div className='h-[400px] bg-DarkCard flex items-center justify-center rounded-md'>
						<p className='text-DarkBody text-[16px]'>Lquidity pool/Token info here</p>
					</div>					
					<div className='grow bg-DarkCard flex items-center justify-center rounded-md'>
						<p className='text-DarkBody text-[16px]'>Promotions here</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Rooms;