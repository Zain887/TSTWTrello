import React, { useState } from 'react';
import ColumContainer from './ColumContainer'
import Content from './Content';

interface Props {
  // Define your component props here
}

interface Card {
  content: string;
}

interface Column {
  title: string;
  cards: Card[];
}

const columns: Column[] = [
  {
    title: 'Column',
    cards: []
  },
];

const MainComHolder: React.FC<Props> = (props) => {
  const [colums, setColums] = useState<Column[]>(columns);

  const handleAddCard = () => {
    const newCardTitle = `Colums ${colums.length + 1}`;
    setColums([...colums, { title: newCardTitle, cards: [] }]);
  }
  const handleDeleteCard = (index: number) => {
    const updatedCards = [...colums];
    updatedCards.splice(index, 1);
    setColums(updatedCards);
  };
  const addNewColumnHandler = (index: number) => {
    const updatedColumns = [...colums];
    updatedColumns[index].cards.push({ content: 'new content' });
    setColums(updatedColumns);
  };
  return (
    <>
      <div className='fixed w-full h-full overflow-x-scroll overflow-y-hidden p-10'>
        <div className='inline-flex gap-3'>
          {colums.map((colum, index) => (
            <ColumContainer key={index} title={colum.title}
              onAddRowCard={() => addNewColumnHandler(index)}
              deleteCard={() => {
                handleDeleteCard(index)
              }}>
              {colum.cards.map((card, cardIndex) => (
                <Content content={card.content} key={cardIndex} />
              ))}
            </ColumContainer>
          ))}
          <button className=' bg-blue-500 w-[179px] px-6 h-12 rounded-lg font-bold hover:text-orange-600 hover:bg-black' onClick={handleAddCard}>Add Another List</button>
        </div>
      </div>
    </>
  );
};

export default MainComHolder;