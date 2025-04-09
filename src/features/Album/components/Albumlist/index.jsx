import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss';

Albumlist.propTypes = {
    albumlist: PropTypes.array.isRequired,
};

function Albumlist({albumlist}) {
    return (
        <ul className="album-list">
           {albumlist.map(album =>
           (
             <li key={album.id}>
                <Album album={album}/>
             </li>
           ))}
        </ul>
    );
}

export default Albumlist;