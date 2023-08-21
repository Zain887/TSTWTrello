import React, { ReactNode, useState } from 'react';

interface Props {
    children: ReactNode;
    title: string;
    onAddRowCard: () => void;
    deleteCard : () => void;
}

const ComponentName: React.FC<Props> = ({ children,  title, onAddRowCard, deleteCard}) => {
    
    const [editTitle, setEditTitle] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    
    const handleTiltleUpdate = () => {
        setEditTitle(true);
    };
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.target.value);
    };
    const handleTitleSubmit = () => {
        setEditTitle(false);
    }
    
    return (
        <div className='p-3 bg-[#101204] md:w-[272px] rounded-xl'>
            <div className='flex justify-between items-center'>
                {editTitle ? (
                    <input
                        type="text"
                        value={newTitle}
                        onChange={handleTitleChange}
                        onBlur={handleTitleSubmit}
                        autoFocus
                        className='text-[#AEB9C5] text-sm bg-transparent outline-none w-full'
                    />
                ) : (
                    <p className='text-[#AEB9C5] text-sm hover:text-red-500' onClick={handleTiltleUpdate}>{newTitle}</p>
                )}
                <img className=' md:w-5 md:h-5 hover:bg-red-500 rounded-sm cursor-pointer' onClick={deleteCard} src="/assetes/more.svg" alt="more" />
            </div>
            <div className=' md:max-h-[698px] overflow-y-scroll'>
                {children}
            </div>
            <div className='flex justify-between items-center'>
                <div className="flex items-center gap-2 cursor-pointer text-[#AEB9C5] hover:text-red-500" onClick={onAddRowCard}>
                    <p className='text-lg'>+</p>
                    <p className='text-sm'>Add a Card</p>
                </div>
                <img className=' md:w-5 md:h-5 hover:bg-red-500 rounded-sm cursor-pointer' src="/assetes/addform.svg" alt="more" />
            </div>
        </div>
    );
};

export default ComponentName;