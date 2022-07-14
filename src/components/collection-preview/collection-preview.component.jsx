import React from 'react';
import { generatePath, useNavigate } from 'react-router';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.css';
const CollectionPreview = (props) => {
   const { title , items } = props;
   const navigate = useNavigate();
   const GoToCollectionPage = () => {
    navigate(generatePath('/shop/:collection', {
        collection : title 
    }))
   }
    return (
        <div className='collection-preview'> 
          <h1 className='title' onClick={GoToCollectionPage}>{title.toUpperCase()}</h1>
          <div className='preview'>
              {items
              .filter((item,idx) => idx<4)
              .map(item => (
                  <CollectionItem key={item.id} item={item}/>
              ))}
         </div>
        </div>
    )
}
  
export default CollectionPreview;