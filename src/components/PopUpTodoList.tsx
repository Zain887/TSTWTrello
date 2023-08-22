import React, { useState } from 'react';

interface Props {
    closePopUp: () => void;

    // Define your component props here
}

const PopUpTodoList: React.FC<Props> = ({ closePopUp }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-[#00008b61] backdrop-blur-sm flex items-center justify-center'>
            <div className=" bg-indigo-950 w-[600px] h-[800px] p-8 relative">
                <p className='text-yellow-300 font-base text-base hover:text-black px-3 rounded-3xl hover:bg-yellow-300 text-center w-fit m-auto' onClick={closePopUp}>close</p>
                <h1 className=' text-red-600 font-extrabold text-3xl text-center my-5'>Are You Getting Stuck in EveryDay LIFE...???</h1>
                <h4 className=' bg-yellow-300 p-3 text-base font-bold text-center rounded-xl cursor-pointer hover:bg-black hover:text-yellow-300 mx-auto w-fit'>Make Your Life easy by oneClick & manage you routenTask</h4>

                <div className='mt-8'>
                    <p className='text-yellow-300 font-base text-base text-center'>Yahooooo You Made IT....</p>

                    <div className='flex items-center gap-5 mt-[50px] ml-[50px]'>
                        <input
                            type="checkbox"
                            className='w-6 h-6'
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                        />
                        <label className={`font-light uppercase text-2xl ${isChecked ? 'line-through' : ''} text-white`}>worklist hare</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUpTodoList;