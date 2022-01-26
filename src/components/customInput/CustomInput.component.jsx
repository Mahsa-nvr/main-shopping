import React from 'react';
// import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input } from 'reactstrap';


const CustomInput = ( props ) => {
    const { type, name, id, handleChange, value} = props;
    return (
        <Form>
         <FormGroup>
          <Label for="Email">{name}</Label>
          <Input value={value} type={type} name={name} id={id} onChange={handleChange}/>
        </FormGroup>
        </Form>
    )
}

// CustomInput.propTypes = {
//     type: PropTypes.object,
//     name: PropTypes.object,
//     id: PropTypes.object,
//     handleChange: PropTypes.func,
//     value: PropTypes.object,
// }

export default CustomInput;