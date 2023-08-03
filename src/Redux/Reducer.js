const initialState={
    product:[],
   
};
const myreducer=(state=initialState,action)=>{

    switch (action.type) {
        case 'ecommerce':
          return {
            ...state,
            product: action.payload
          };
       
    
        default:
          return state;
      }



}

export default myreducer