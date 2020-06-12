import actionTypes from '../actionTypes/index';

const initialState = {
  businesses: [],
  pricesRange: [],
  priceFilter: []
};

const businessReducer = (state = initialState, action) => {
  let stateObj = Object.assign({}, state);
  switch (action.type) {


    case actionTypes.SET_BUSINESSES:
      {
        stateObj.businesses = action.payload;
          
        // get unique values for the price ranges 
        var flags = []; 
        for (var i = 0; i < action.payload.length; i++) {
          if (flags[action.payload[i].price] || !action.payload[i].price) continue;
          flags[action.payload[i].price] = true;
          stateObj.pricesRange = [...stateObj.pricesRange, action.payload[i].price]
        }
        stateObj.priceFilter = stateObj.pricesRange;
        return stateObj;
      }

    case actionTypes.SORT:
      {
      stateObj.businesses = stateObj.businesses.slice().sort((a, b) => parseFloat(b.review_count) - parseFloat(a.review_count));
       return stateObj;

      }
    case actionTypes.PRICE_FILTER:

      {
        if (action.payload === -1) {
          stateObj.priceFilter = stateObj.pricesRange;
        }
        else {
          stateObj.priceFilter = [stateObj.pricesRange[action.payload]]
        }
        return stateObj;
      }
    default:
      return state;
  }
};
export default businessReducer; 