import React, { useState } from 'react';

interface Props {
    // Define your component props here
}

const TodoList: React.FC<Props> = (props) => {
    const [checkList, setCheckList] = useState<{ label: string, isChecked: boolean }[]>(
        [
           { label: 'hello', isChecked: false },
        ]
    );
    const [userInput, setUserInput] = useState<string>(""); // Define userInput state
    
    const handleAddNewCheckList = () => {
        if (userInput.trim() !== "") {
            const newItem = { label: userInput, isChecked: false };
            checkList.push(newItem); // Push the new item
            setCheckList(checkList); // Trigger state update
            setUserInput(""); // Clear input after adding
        }
    };

    return (
        <>
            <div className="h-[320px] overflow-y-scroll p-5">
                {checkList.map((item, index) => (
                    <div key={index} className="break-all flex items-center gap-5">
                        <input
                            type="checkbox"
                            className='w-6 h-6'
                            checked={item.isChecked}
                            onChange={() => {
                                const updatedCheckList = [...checkList];
                                updatedCheckList[index].isChecked = !item.isChecked;
                                setCheckList(updatedCheckList);
                            }}
                        />
                        <label className={`font-light uppercase text-2xl w-[445px] ${item.isChecked ? 'line-through' : ''} text-white`}>
                            {item.label}
                        </label>
                    </div>
                ))}
            </div>
            <div className="grid gap-4">
                <input
                    className='w-full bg-white rounded-lg p-2'
                    type="text"
                    placeholder="Enter label"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button
                    className='bg-blue-500 text-white font-bold text-lg py-1 px-3 rounded-lg hover:bg-blue-700'
                    onClick={handleAddNewCheckList}>
                    Add New List
                </button>
            </div>
        </>
    );
};

export default TodoList;
