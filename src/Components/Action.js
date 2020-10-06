export const increment = 'INCREMENT';
export const decrement = 'DECREMENT';
export const reset = 'RESET';




export const IncrementAction = () => ({
            type:increment,
})

export const DecrementAction = () => ({
            type:decrement,
})
export const ResetAction = () => ({
             type:reset,
})