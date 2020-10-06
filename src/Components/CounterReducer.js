const initializeState = {
    counter: 0,
    name:"Ali",
    mazy:"MBA"
}

export default function CounterReducer(state=initializeState, action, ) {

    switch(action.type){
       case 'INCREMENT':
           return{...state, counter: state.counter + 1 };

           case 'DECREMENT':
               return {...state, counter: state.counter - 1 };

         case 'RESET':
               return {...state, counter:0 };

        default:
            return state

   }
    
}
