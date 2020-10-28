import React from 'react';
import { useCount } from '../contexts/countContext';

const Button = () => {
    const { count, setCount } = useCount();

    const addCount = () => {
        setCount(count + 1)
    }

    return (
        <>
            <button onClick={() => addCount()}>Add number</button>
        </>
    )
}

export default Button;