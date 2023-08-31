import React, { useState } from 'react';

interface Props { }

interface Member {
	id: number;
	name: string;
	checked?: boolean;
}

interface Todo {
	label: string;
	checked: boolean;
	edit: boolean;
}

interface Card {
	title: string;
	content: string;
	edit: boolean;
	todos: Todo[];
}

interface Column {
	title: string;
	edit: boolean;
	cards: Card[];
}

const TrelloBoard: React.FC<Props> = () => {
	const [members, setMembers] = useState<Member[]>([]);
	const [newMemberName, setNewMemberName] = useState('');
	const [selectedMembers, setSelectedMembers] = useState<number[]>([]);
	const [columns, setColumns] = useState<Column[]>([
		{
			title: 'Test Column 1',
			edit: false,
			cards: [
				{
					title: 'card 1',
					edit: false,
					content: 'Type Your Description Title Here',
					todos: [
						{
							label: 'TaskToDo',
							checked: false,
							edit: false,
						},
					],
				},
			],
		},
	]);

	const addNewToDoHandler = (columnIndex: number, cardIndex: number) => {
		const newColumns = [...columns];
		newColumns[columnIndex].cards[cardIndex].todos.push({
			label: 'TaskToDo',
			checked: false,
			edit: false,
		});
		setColumns(newColumns);
	};
	const addNewCard = (columnIndex: number) => {
		const newColumns = [...columns];
		const newCardTitle = `card${newColumns[columnIndex].cards.length + 1}`;

		newColumns[columnIndex].cards.push({
			title: newCardTitle,
			edit: false,
			content: 'Add Your Content Here',
			todos: [
				{
					label: 'TaskToDo',
					checked: false,
					edit: false,
				},
			],
		});
		setColumns(newColumns);
	};
	const addNewColumn = () => {
		const newColumns = [...columns];
		const newColumnsTilte = `Column ${newColumns.length + 1}`
		newColumns.push({
			title: newColumnsTilte,
			edit: false,
			cards: [
				{
					title: 'card 1',
					edit: false,
					content: 'Type Your Description Title Here',
					todos: [
						{
							label: 'TaskToDo',
							checked: false,
							edit: false,
						},
					],
				},
			],
		});
		setColumns(newColumns);
	};
	const addMember = () => {
		if (newMemberName.trim() !== '') {
			const newMemberId = members.length + 1;
			const newMember = { id: newMemberId, name: newMemberName };
			members.push(newMember);
			setMembers([...members]);
			setNewMemberName('');
		}
	};

	const updateTodoTitleHandler = (todoIndex: number, cardIndex: number, columnIndex: number) => {
		const newColumns = [...columns];
		if (newColumns[columnIndex].cards[cardIndex].todos[todoIndex].label === 'TaskToDo') {
			newColumns[columnIndex].cards[cardIndex].todos[todoIndex].edit = true;
			setColumns(newColumns);
		}
	};
	const toDoTitleUpdated = (todoIndex: number, cardIndex: number, columnIndex: number) => {
		const newColumns = [...columns];
		newColumns[columnIndex].cards[cardIndex].todos[todoIndex].edit = false;
		setColumns(newColumns);
	};
	const todoTitleEdit = (todoIndex: number, cardIndex: number, columnIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
		const newColumns = [...columns];
		newColumns[columnIndex].cards[cardIndex].todos[todoIndex].label = event.target.value;
		setColumns(newColumns);
	};
	const updateColumTitle = (columnIndex: number) => {
		const newColumns = [...columns];
		newColumns[columnIndex].edit = true;
		setColumns(newColumns);
	};
	const columTilteEdit = (columnIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
		const newColumns = [...columns];
		newColumns[columnIndex].title = event.target.value;
		setColumns(newColumns);
	};
	const columTilteUpdated = (columnIndex: number) => {
		const newColumns = [...columns];
		newColumns[columnIndex].edit = false;
		setColumns(newColumns);
	};
	const checkListHandler = (todoIndex: number, cardIndex: number, columnIndex: number) => {
		const newColumns = [...columns];
		const newTodo = { ...newColumns[columnIndex].cards[cardIndex].todos[todoIndex] };
		newTodo.checked = !newTodo.checked;
		newColumns[columnIndex].cards[cardIndex].todos[todoIndex] = newTodo;
		setColumns(newColumns);
	};
	const handleMemberCheckboxChange = (memberId: number) => {
		setMembers((prevMembers) =>
			prevMembers.map((member) =>
				member.id === memberId ? { ...member, checked: !member.checked } : member
			)
		);
	};
	return (
		<div className="flex items-center">
			<div className='md:h-screen bg-green-950 md:w-[20%]'>
				<div className='p-4'>
					<h2 className='text-white text-lg font-bold mb-4'>Members</h2>
					<ul className='space-y-2'>
						{members.map((member) => (
							<li key={member.id} className='text-white'>
								{member.name}
							</li>
						))}
					</ul>
					<div className='mt-4 flex'>
						<input
							type='text'
							className='rounded-l-lg p-2 w-full outline-none'
							placeholder='Enter member name'
							value={newMemberName}
							onChange={(e) => setNewMemberName(e.target.value)}
						/>
						<button
							className='bg-blue-500 text-white font-bold text-sm px-4 rounded-r-lg hover:bg-blue-700'
							onClick={addMember}
						>
							Add
						</button>
					</div>
				</div>
			</div>
			<div className='md:w-[80%] h-full overflow-x-scroll overflow-y-hidden py-10'>
				<div className='inline-flex gap-3'>
					{columns.map((column, columnIndex) => (
						<div key={columnIndex} className='p-3 bg-[#101204] md:w-[272px] rounded-xl h-fit'>
							{/* Colum title */}
							<div className='flex justify-between items-center'>
								{column.edit ? (
									<input
										type='text'
										onChange={(event) => columTilteEdit(columnIndex, event)}
										onBlur={() => columTilteUpdated(columnIndex)}
										autoFocus
										value={column.title}
										className='text-[#AEB9C5] text-sm bg-transparent outline-none w-full'
									/>
								) : (
									<p className='text-[#AEB9C5] text-sm hover:text-red-500 cursor-pointer' onClick={() => updateColumTitle(columnIndex)}>
										{column.title}
									</p>
								)}

								<img
									className=' md:w-5 md:h-5 hover:bg-red-500 rounded-sm cursor-pointer'
									src='/assetes/more.svg'
									alt='more'
								/>
							</div>
							{/* Card title */}
							<div className=' md:max-h-[698px] overflow-y-scroll'>
								{column.cards.map((card, cardIndex) => (
									<div key={cardIndex} className='bg-[#282E33] mb-2 rounded-lg w-[243px] p-3 h-auto break-words'>
										<input
											type='text'
											autoFocus
											value={card.title}
											className='text-[#AEB9C5] text-sm bg-transparent outline-none w-full'
										/>
										<input className='w-full text-[#AEB9C5] text-sm bg-transparent outline-none' value={card.content} />
										<hr />
										{/* Card Todos */}
										<div className='h-[320px] overflow-y-scroll p-5'>
											{card.todos.map((todo, todoIndex) => (
												<div key={todoIndex} className='break-all flex items-center gap-5'>
													<input
														type='checkbox'
														className='w-5 h-5'
														value={'CheckList'}
														id={`todo-${todoIndex}`}
														checked={todo.checked} // Add this line
														onChange={() => checkListHandler(todoIndex, cardIndex, columnIndex)}
													/>
													{todo.edit ? (
														<input
															className='w-full bg-white rounded-lg p-2'
															type='text'
															placeholder='Enter label'
															value={todo.label}
															onBlur={() => toDoTitleUpdated(todoIndex, cardIndex, columnIndex)}
															onChange={(event) => todoTitleEdit(todoIndex, cardIndex, columnIndex, event)}
														/>
													) : (
														<label className={`font-light capitalize text-xl text-white ${todo.checked === true ? 'line-through' : ''}`} onClick={() => updateTodoTitleHandler(todoIndex, cardIndex, columnIndex)}>
															{todo.label}
															{todo.label !== 'TaskToDo' ? (
																<span className='text-base font-bold relative'>
																	...TMList
																	<div className='md:w-[113px] absolute top-full left-0 bg-white border border-gray-300 shadow-md p-2 rounded-lg'>
																		{members.map((member) => (
																			<label key={member.id} className='flex items-center text-red-500'>
																				<input
																					type='checkbox'
																					className='mr-2'
																					checked={member.checked} // Set this based on your logic
																					onChange={() => handleMemberCheckboxChange(member.id)} // Define this handler
																				/>
																				{member.name}
																			</label>
																		))}
																	</div>
																</span>
															) : null}
														</label>
													)}
												</div>
											))}
										</div>
										<div className='grid gap-4'>
											{/* <input className='w-full bg-white rounded-lg p-2' type='text' placeholder='Enter label' /> */}
											<button
												className='bg-blue-500 text-white font-bold text-lg py-1 px-3 rounded-lg hover:bg-blue-700'
												onClick={() => addNewToDoHandler(columnIndex, cardIndex)}
											>
												Add New Todo
											</button>
										</div>
									</div>
								))}
							</div>
							<div className='flex justify-between items-center'>
								<div className='flex items-center gap-2 cursor-pointer text-[#AEB9C5] hover:text-red-500'>
									<p className='text-lg'>+</p>
									<p className='text-sm' onClick={() => addNewCard(columnIndex)}>Add a Card</p>
								</div>
								<img className=' md:w-5 md:h-5 hover:bg-red-500 rounded-sm cursor-pointer' src='/assetes/addform.svg' alt='more' />
							</div>
						</div>
					))}
					<button className=' bg-blue-500 w-[179px] px-6 h-12 rounded-lg font-bold hover:text-orange-600 hover:bg-black' onClick={addNewColumn}>
						Add Another List
					</button>
				</div>
			</div>
		</div>
	);
};

export default TrelloBoard;
