import React from 'react';

const Subhading = ({subHading, hading}) => {
    return (
        <div className='mx-auto text-center md:w-3/10 my-10'>
            <p className='text-2xl text-yellow-400 mb-2'>---{subHading}---</p>
            <h4 className='text-3xl uppercase border-y-4 py-4'>{hading}</h4>
        </div>
    );
};

export default Subhading;