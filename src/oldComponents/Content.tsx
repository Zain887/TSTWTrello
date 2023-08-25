import React, { useState } from 'react';
import PopUpTodoList from './PopUpTodoList';


interface Props {
  content: string;
  // Define your component props here
}

const Content: React.FC<Props> = ({ content }) => {
  const [popUp, setPopUp] = useState(false);

  const [cardColmTitle, setCardColmTitle] = useState(false);
  const [cardColmEdit, setCardColmEdit] = useState<string>('ToDoListDataWrite');

  // input and title controler
  const cardColmEditedHandle = () => {
    setCardColmTitle(false);
  }
  const cardColmTitleHandle = () => {
    // setCardColmTitle(true);
    setPopUp(true);
  }
  const cardColmEditHandle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCardColmEdit(event.target.value);
  }
  const close = () => {
    setPopUp(false);
  }
  return (
    <>
      <div className='bg-[#282E33] mb-2 rounded-lg w-[243px] p-3 h-auto break-words' onClick={cardColmTitleHandle}>
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
      {popUp && (
        <PopUpTodoList closePopUp={close} itemsData='' />
      )}
    </>
  );
};

export default Content;