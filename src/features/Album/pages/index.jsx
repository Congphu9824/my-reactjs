import React from 'react';
import PropTypes from 'prop-types';
import Albumlist from '../components/Albumlist';
import './style.scss';
// contain data and bắt component render data for the it
albumfeature.propTypes = {
    
};

function albumfeature(props) {
    const albumlist =[
        {
            id: 1, 
            name: 'Em là kẻ đáng thương',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/2/4/0924571ca7128eaa17ce2835e47cb132.jpg',
        },
        {
            id: 2,         
            name: 'Sự nghiệp chướng',
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/f/2/2/1f223cda4a6f4b0f0cab30a0d121da89.jpg"
        },
        {
            id: 3,
            name: 'Đoạn tuyệt nàng đi',
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/e/6/d/ee6da0ed110295ba1e2a4ea8dade654c.jpg"
        },

    ]
    return (
        <div className='page'>
            <h2 className='page_title'>Bạn có thể sẽ thích đấy</h2>
            <Albumlist albumlist={albumlist}/>
        </div>
    );
}

export default albumfeature;