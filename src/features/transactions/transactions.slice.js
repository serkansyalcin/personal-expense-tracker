import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    incomesArray: [],
    expenseArray: [],
    currentTransactionMode: 'expense', // income || expense
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
    }
})

export default transactions.reducer

export const { addExpenseItem, addIncomeItem } = transactions.actions