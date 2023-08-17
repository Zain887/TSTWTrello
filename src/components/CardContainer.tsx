import React, {ReactNode} from 'react';

interface Props {
    children: ReactNode;
    title: string
    // Define your component props here
}

const ComponentName: React.FC<Props> = ({children, title}) => {
    return (
        <div className='p-3 bg-[#101204] md:w-[272px] rounded-xl'>
            <div className='flex justify-between items-center'>
                <p className='text-[#AEB9C5] text-sm'>{title}</p>
                <img className=' md:w-5 md:h-5' src="/assetes/more.svg" alt="more" />
            </div>
            <div className=' md:max-h-[698px] overflow-y-scroll'>
                {children}
            </div>
            <div className='flex justify-between items-center'>
                <div className="flex items-center gap-2">
                    <p className='text-[#AEB9C5] text-lg'>+</p>
                    <p className='text-[#AEB9C5] text-sm'>Add a Card</p>
                </div>
                <img className=' md:w-5 md:h-5' src="/assetes/addform.svg" alt="more" />
            </div>
        </div>
    );
};

export default ComponentName;