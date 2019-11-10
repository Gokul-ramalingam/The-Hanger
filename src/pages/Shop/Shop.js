import React,{ Component } from 'react'
import COLLECTION_DETAILS from './shop.data'
import CollectionPreview from '../../components/preview-collection/preview-collection';

class Shop extends Component{
    constructor(props){
        super(props);
        this.state = {
            collections : COLLECTION_DETAILS
        }
    }

    render(){
        const { collections } = this.state;
        return(
            <div className="shop-page">
            {
                collections.map(({id,...otherProps}) =>(
                                      <CollectionPreview key={id} {...otherProps}/>  
                                    ))
            }
            </div>
        )
    }
}

export default Shop;