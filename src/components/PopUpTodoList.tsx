import React, { useState } from 'react';

interface Props {
    itemsData: string
    closePopUp: () => void;
}

const PopUpTodoList: React.FC<Props> = ({ closePopUp, itemsData }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [newLists, setNewLists] = useState<{ label: string; isChecked: boolean }[]>([]);
    const [showLabelInput, setShowLabelInput] = useState(false);
    const [newListLabel, setNewListLabel] = useState('');

    const addNewList = () => {
        setShowLabelInput(true);
    };

    const saveNewList = () => {
        if (newListLabel.trim() !== '') {
            setNewLists([...newLists, { label: newListLabel, isChecked: false }]);
            setNewListLabel('');
            setShowLabelInput(false);
        }
    };

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-[#00008b61] backdrop-blur-sm flex items-center justify-center'>
            <div className="bg-indigo-950 w-[600px] h-[800px] p-8 relative">
                <p className='cursor-pointer text-yellow-300 font-base text-base hover:text-black px-3 rounded-3xl hover:bg-yellow-300 text-center w-fit m-auto' onClick={closePopUp}>close</p>
                <h1 className='text-red-600 font-extrabold text-3xl text-center my-5'>Are You Getting Stuck in EveryDay LIFE...???</h1>
                <h4 className='bg-yellow-300 p-3 text-base font-bold text-center rounded-xl cursor-pointer hover:bg-black hover:text-yellow-300 mx-auto w-fit'>Make Your Life easy by oneClick & manage you routenTask</h4>

                <div className='mt-8'>
                    <p className='text-yellow-300 font-base text-base text-center'>Yahooooo You Made IT....</p>
                    <div className='mt-[50px]'>
                        <div className="h-[320px] overflow-y-scroll p-5">
                            {newLists.map((list, index) => (
                                <div className=" break-all flex items-center gap-5" key={index}>
                                    <input
                                        type="checkbox"
                                        className='w-6 h-6'
                                        checked={list.isChecked}
                                        onChange={() => {
                                            const updatedLists = [...newLists];
                                            updatedLists[index].isChecked = !list.isChecked;
                                            setNewLists(updatedLists);
                                        }}
                                    />
                                    <label className={`font-light uppercase text-2xl w-[445px] ${list.isChecked ? 'line-through' : ''} text-white`}>{list.label}</label>
                                </div>
                            ))}
                        </div>
                        <div className='flex gap-2 mt-4 justify-center'>
                            {!showLabelInput ? (
                                <button
                                    className='bg-blue-500 text-white font-bold text-lg py-1 px-3 rounded-lg hover:bg-blue-700'
                                    onClick={addNewList}
                                >
                                    Add New List
                                </button>
                            ) : (
                                <>
                                    <input
                                        type="text"
                                        value={newListLabel}
                                        onChange={(e) => setNewListLabel(e.target.value)}
                                        placeholder="Enter label"
                                        className='w-full bg-white rounded-lg p-2'
                                    />
                                    <button
                                        className='bg-blue-500 text-white font-bold text-lg py-1 px-3 rounded-lg hover:bg-blue-700'
                                        onClick={saveNewList}
                                    >
                                        Save
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUpTodoList;
