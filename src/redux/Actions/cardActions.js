export const ADD_TO_CARD = "ADD_TO_CARD";
export const REMOVE_FROM_CARD = "REMOVE_FROM_CARD";

export const addToCard = (id, name) =>{
    return {type: ADD_TO_CARD, id,name}
}

export const removeFromCard = id =>{
    return {type: REMOVE_FROM_CARD, id}
}