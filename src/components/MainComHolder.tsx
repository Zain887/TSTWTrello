import React, { useState } from 'react';
import ContainerCard from './CardContainer'

interface Props {
  // Define your component props here
}

const MainComHolder: React.FC<Props> = (props) => {

  const [cardTitle, setCardTitle] = useState<string[]>(['Todo']);
  const [cardColmTitle, setCardColmTitle] = useState(false);
  const [cardColmEdit, setCardColmEdit] = useState<string>('ToDoListDataWrite');

  const handleAddCard = () => {
    const newCardTitle = `Card ${cardTitle.length + 1}`;
    setCardTitle([...cardTitle, newCardTitle]);
  }
  const cardColmEditedHandle = () => {
    setCardColmTitle(false);
  }
  const cardColmTitleHandle = () => {
    setCardColmTitle(true);
  }
  const cardColmEditHandle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCardColmEdit(event.target.value);
  }

  return (
    <div className='fixed w-full h-full overflow-x-scroll overflow-y-hidden p-10'>
      <div className='inline-flex gap-3'>
        {cardTitle.map((title, index) => (
          <ContainerCard key={index} title={title} onAddRowCard={() => console.log(index)} deleteCard={()=>{}}>
            <div className='bg-[#282E33] rounded-lg w-[243px] p-3 h-auto break-words' onClick={cardColmTitleHandle}>
              {cardColmTitle ? (
                <textarea name="textarea" rows={5} className='w-full text-[#AEB9C5] text-sm bg-transparent outline-none'
                  value={cardColmEdit}
                  onBlur={cardColmEditedHandle}
                  onChange={cardColmEditHandle} />
              ) : (
                <p className='text-[#AEB9C5] text-sm'>
                  {cardColmEdit}
                </p>
              )}
            </div>
          </ContainerCard>
        ))}
        <button className=' bg-blue-500 w-[179px] px-6 h-12 rounded-lg font-bold hover:text-orange-600 hover:bg-black' onClick={handleAddCard}>Add Another List</button>
      </div>
    </div>
  );
};

export default MainComHolder;