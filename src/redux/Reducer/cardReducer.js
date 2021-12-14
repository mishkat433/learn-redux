import { ADD_TO_CARD, REMOVE_FROM_CARD } from "../Actions/cardActions"

const initialState= {
    card: [],
    products: [
        { name: "Fujitsu Laptop", id: 1 },
        { name: "Lenove Laptop", id: 2 },
        { name: "HP Laptop", id: 3 },
        { name: "Asus Laptop", id: 4 },
        { name: "Toshiba Laptop", id: 5 }
    ]
}

const cardReducer = (state= initialState,action) =>{
    switch(action.type){
        case ADD_TO_CARD:
            const newID = action.id;
            const newCard= [...state.card, newID];
            return{products: state.products, card: newCard}
        case REMOVE_FROM_CARD:
            const id = action.id;
            const remainingCard = state.card.filter(item=> item !== id);
            return {products: state.products, card: remainingCard}
        default:
            return state
    }
}

export default cardReducer;