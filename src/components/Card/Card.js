import React from 'react';
import { connect } from 'react-redux';
import { removeFromCard } from '../../redux/Actions/cardActions';

const Card = (props) => {
    const {card, removeFromCard} = props
    console.log(card)
    return (
        <div>
            <h1>I am card</h1>
            <ul>
                {card.map(pd => <li>{pd} <button onClick={()=>removeFromCard(pd)} >X</button></li> )}
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        card: state.card
    }
}

const mapDispatchToProps = {
    removeFromCard: removeFromCard
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);