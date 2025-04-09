import React, {useState} from 'react';
import PropTypes from 'prop-types';


Counter.propTypes = {
    
};

function Counter(props) {
    // used useState need to import from react 
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>
                <p>Click {count} lần</p>
                <button onClick={() => setCount(x => x + 1)}>increase</button>
                <button onClick={() => setCount(x => x - 1)}>decrease</button>
            </div>
        </div>
    );
}

export default Counter;