import React, { useState } from 'react';
import PopUp from './PopUp';

interface Props {
    // Define your component props here
}

const InnerCard: React.FC<Props> = () => {
    const [popUp, setPopUp] = useState(false);
    const [cardColmTitle, setCardColmTitle] = useState(false);
    const [cardColmEdit, setCardColmEdit] = useState<string>('Please Add Your Title or Discriptoin Here');

    // input and title controler
    const cardColmEditedHandle = () => {
        setCardColmTitle(false);
    }
    const cardColmTitleHandle = () => {
        if (cardColmEdit === 'Please Add Your Title or Discriptoin Here') {
            setCardColmTitle(true);
        } else {
            setPopUp(true);
        }
    }
    const cardColmEditHandle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCardColmEdit(event.target.value);
    }
    const closePopup = () => {
        setPopUp(false);
      }
    return (
        <>
        <div className='bg-[#282E33] mb-2 rounded-lg w-[243px] p-3 h-auto break-words' onClick={cardColmTitleHandle}>
            {cardColmTitle ? (
                <textarea name="textarea" rows={5} className='w-full text-[#AEB9C5] text-sm bg-transparent outline-none'
                    value={cardColmEdit}
                    placeholder='Please Add Your Title Here or Discriptoin'
                    onBlur={cardColmEditedHandle}
                    onChange={cardColmEditHandle} />
            ) : (
                <p className='text-[#AEB9C5] text-sm cursor-pointer'>
                    {cardColmEdit}
                </p>
            )}
        </div>
         {popUp && (
            <PopUp close={closePopup}/>
          )}
        </>
    );
};

export default InnerCard;