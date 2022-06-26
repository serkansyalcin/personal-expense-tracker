import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    incomesArray: [],
    expenseArray: [],
    currentTransactionMode: 'income', // income || expense
    incomeAmount: 0,
    expenseAmount: 0,
}

const transactions = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addItem: (state, action) =>{
            const { id, amount, description, type } = action.payload 

            if(type === 'income'){
                state.incomeAmount += Number(amount)
                state.incomesArray.push({ id, description, amount })
            }

            if(type === 'expense'){
                state.expenseAmount += Number(amount)
                state.expenseArray.push({ id, description, amount })
            }
        },
        toggleTransactionMode: (state, action) => {
            (state.currentTransactionMode === 'income') 
                ? state.currentTransactionMode = 'expense'
                : state.currentTransactionMode = 'income'
        },
        removeItem: (state, action) => {
            const { id, type, amount } = action.payload

            if(type === 'income'){
                state.incomesArray = state.incomesArray.filter(item => item.id !== id)
                state.incomeAmount -= Number(amount)
            }
            if(type === 'expense'){
                state.expenseArray = state.expenseArray.filter(item => item.id !== id)
                state.expenseAmount -= Number(amount)
            }
        }
    }
})

export default transactions.reducer

export const { toggleTransactionMode, addItem, removeItem } = transactions.actions