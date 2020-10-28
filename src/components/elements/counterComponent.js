import React from 'react';
import { useCount } from '../contexts/countContext';

const Counter = () => {
    const {count} = useCount();

    return (
        <div>
            <h1>
                {count}
            </h1>
        </div>
    )
}

export default Counter;