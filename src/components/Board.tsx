import React, { useState } from 'react';
import ColumContainer from './ColContainer';
import InnerCard from './InnerCard';

interface Props {
    // Define your component props here
}

const Board: React.FC<Props> = (props) => {
    const [colums, setColums] = useState(
        [
            {
                id: 0, title: 'card1', innerCards: [{ id: 0 }]
            }
        ]
    );
    const addNewColum = () => {
        const newColumId = colums.length;
        const newColumn = { id: newColumId, title: `card${newColumId + 1}`, innerCards: [{ id: 0 }] };
        colums.push(newColumn);
        setColums(colums.slice());
    }
    const removeColum = (colId: any) => {
        const updateColum = colums.filter(colums => colums.id !== colId);
        setColums(updateColum);
    }

    const addNewCardBlock = (colId: any) => {
        const updatedColums = colums.map(colCard => {
            if (colCard.id === colId) {
                const newInnerCardID = colCard.innerCards.length;
                colCard.innerCards.push({ id: newInnerCardID });
            }
            return colCard;
        });
        setColums(updatedColums);
    }
    return (
        <>
            <div className='fixed w-full h-full overflow-x-scroll overflow-y-hidden p-10'>
                <div className='inline-flex gap-3'>
                    {colums.map((colum, colIndex) => (
                        <ColumContainer title={colum.title} key={colIndex} addNewCard={() => addNewCardBlock(colum.id)} deleteColum={() => removeColum(colum.id)}>
                            {colum.innerCards.map((innerCard, cardIndex) => (
                                <InnerCard key={cardIndex} />
                            ))}
                        </ColumContainer>
                    ))}
                    <button className=' bg-blue-500 w-[179px] px-6 h-12 rounded-lg font-bold hover:text-orange-600 hover:bg-black' onClick={addNewColum}>Add Another List</button>
                </div>
            </div>
        </>
    );
};

export default Board;