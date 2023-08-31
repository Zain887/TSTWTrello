import React, { useState } from 'react';
import Member from './Member';
import ColumnList from './Column';
interface Props {
	// Define your component props here
}

const TBoard: React.FC<Props> = (props) => {
	return (
		<div className="flex items-center">
			<div className='md:h-screen bg-green-950 md:w-[20%]'>
				<Member />
			</div>
			<div className='md:w-[80%] h-full overflow-x-scroll overflow-y-hidden py-10'>
				<ColumnList />
			</div>
		</div>
	);
};

export default TBoard;