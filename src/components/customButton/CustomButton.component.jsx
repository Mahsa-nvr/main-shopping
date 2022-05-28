import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const CustomButton = (props) => {
    const { onClick, title, color, className } = props;
    return (
        <div className={className}>
            <Button onClick={onClick} color={color}>{ title }</Button>
        </div>
    )
}

CustomButton.propTypes = {
    onClick : PropTypes.func,
    title: PropTypes.string,
}
export default CustomButton;