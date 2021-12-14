import React from 'react';
import { addToCard } from '../../redux/Actions/cardActions';
import Products from '../Products/Products';
import {connect} from 'react-redux'

const Shop = (props) => {
    const {products, addToCard} = props
    return (
        <div>
            <h1>I am shop</h1>
            {
                products.map(data=> <Products key={data.id} addToCard={addToCard} product={data}></Products> )
            }
        </div>
    );
};

const mapStateToProps = state=>{
    return{
        products: state.products
    }
}

const mapDispatchToProps ={
    addToCard: addToCard
}


export default connect(mapStateToProps, mapDispatchToProps)(Shop);