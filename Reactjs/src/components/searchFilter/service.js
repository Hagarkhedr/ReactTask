import store from '../../statemanager/store/index';
import actionTypes from '../../statemanager/actionTypes/index';
class BusinessService {

searchBusiness (businessName, location )
{
fetch("http://localhost:5000/SearchBusiness/"+businessName+'/'+location)
.then(res => res.json() )
.then(res => 
  { 
      store.dispatch({
          type:actionTypes.SET_BUSINESSES,
          payload: res.businesses
      })
   console.log(res)
  })
}

}
export default BusinessService ; 