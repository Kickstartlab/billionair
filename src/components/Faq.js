import React, { useState } from 'react';

const Faq = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title flex justify-between items-end cursor-pointer space-y-12 border-b-2 pb-3 border-white-50" onClick={() => setIsActive(!isActive)}>
                <div className='lg:text-2xl font-semibold'>
                    {title}
                </div>
                <div className='text-2xl'>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="accordion-content font-poppins opacity-60 mt-5">{content}</div>}
        </div>
    );
};

export default Faq
