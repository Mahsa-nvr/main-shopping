import React from 'react';
import { useNavigate  } from "react-router-dom";
import './menuItems.styles.css';

const MenuItem = (props) => {
    const { title, imageUrl, linkUrl } = props.sections
    const navigate = useNavigate();
    return (
        <div style={{ backgroundImage : `url(${imageUrl})`}} className='menu-item' onClick={() => navigate(linkUrl)}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
    )
}

export default MenuItem;