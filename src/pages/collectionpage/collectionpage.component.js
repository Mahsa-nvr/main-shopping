import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import './collection.styles.css';
import { selectShopItems } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component'
const CollectionPage = ({collections}) => {
    let params = useParams()
    const collection = collections.find(collect => collect.routeName === params.collection)
    const { title, items } = collection;
    return (
        <div className='collection-page'>
           <h2 className='title'>{title}</h2>
           <div className='items'>
           {
            items.map(item => <CollectionItem key={item.id} item={item}/>)
           }
           </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
  collections : selectShopItems(state),
})

export default connect(mapStateToProps)(CollectionPage);