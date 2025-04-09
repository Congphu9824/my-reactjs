import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

function ColorBox(props) {
    const [color, setColor] = useState('black');
    return (
        <div>
            <h2>Color: {color}</h2>

            <button onClick={() => setColor('red')}>Change to red</button>
            <button onClick={() => setColor('green')}>Change to Green</button>
        </div>
    );
}

export default ColorBox;