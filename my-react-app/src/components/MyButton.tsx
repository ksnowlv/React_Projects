
import React from 'react';
import './MyButton.css';

interface MyButtonProps {
    count:number;
    onClick:() => void;
   }

const MyButton: React.FC<MyButtonProps> = ({ count, onClick }) => {

    return (
        <div>
            <button className='myButton' onClick={onClick}>
            Click me {count} times
            </button>
        </div>
    );
}

export default MyButton;

  