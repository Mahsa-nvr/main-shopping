import React from 'react';
import {connect} from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import MenuItem from '../menuItem/menuItem.component';
const Directory = ({sections}) => {   
    return (
        <div className='directory-menu'>
            {sections.map(section => <MenuItem key={section.id} sections={section} /> )}
        </div>
    )
}

const mapStateToProps = (state) => ({
  sections : selectDirectorySections(state),
})

export default connect(mapStateToProps)(Directory);