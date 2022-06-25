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
        addIncomeItem: (state, action) => {
            const { id, amount, description } = action.payload

            state.incomesArray.push({ id, description, amount })
        },
        addExpenseItem: (state, action) => {
            const { id, amount, description } = action.payload

            state.expenseArray.push({ id, description, amount })
        },
        toggleTransactionMode: (state, action) => {
            (state.currentTransactionMode === 'income') 
                ? state.currentTransactionMode = 'expense'
                : state.currentTransactionMode = 'income'
        }
    }
})

export default transactions.reducer

export const { addExpenseItem, addIncomeItem, toggleTransactionMode } = transactions.actions