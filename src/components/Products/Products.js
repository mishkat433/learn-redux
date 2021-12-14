import React from 'react';

const Products = (props) => {
    const { addToCard, product} = props;
    return (
        <div style={{border: "1px solid gray", margin: "10px", padding:"10px"}}>
            <p>{product.name}</p>
            <button onClick={() => addToCard(product.id)}>Add to card</button>
        </div>
    );
};

export default Products;