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
                
                localStorage.setItem("income", JSON.stringify(state.incomesArray))
                localStorage.setItem('income-amount', JSON.parse(state.incomeAmount))
            }

            if(type === 'expense'){
                state.expenseAmount += Number(amount)
                state.expenseArray.push({ id, description, amount })
                
                localStorage.setItem('expense', JSON.stringify(state.expenseArray))
                localStorage.setItem('expense-amount', JSON.stringify(state.expenseAmount))
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

                let incomeLocalStorage = JSON.parse(localStorage.getItem('income'))
                let incomeAmountLocalStorage = JSON.parse(localStorage.getItem('income-amount'))

                incomeLocalStorage = incomeLocalStorage.filter(item => item.id !== id)
                incomeAmountLocalStorage -=  Number(amount)

                localStorage.setItem('income-amount', JSON.stringify(incomeAmountLocalStorage))
                localStorage.setItem('income', JSON.stringify(incomeLocalStorage))
            }
            if(type === 'expense'){
                state.expenseArray = state.expenseArray.filter(item => item.id !== id)
                state.expenseAmount -= Number(amount)

                let expenseLocalStorage = JSON.parse(localStorage.getItem('expense'))
                let expenseAmountLocalStorage = JSON.parse(localStorage.getItem("expense-amount"))

                expenseLocalStorage = expenseLocalStorage.filter(item => item.id !== id)
                expenseAmountLocalStorage -= Number(amount) 

                localStorage.setItem('expense-amount', JSON.stringify(expenseAmountLocalStorage))
                localStorage.setItem('expense', JSON.stringify(expenseLocalStorage))
            }
        },
        updateTransactionsFromLocalStorage: (state, action) => {
            const { data, type } = action.payload

            if(type === 'income'){
                state.incomesArray = data
            }
            if(type === 'expense'){
                state.expenseArray = data
            }
            if(type === 'income-amount') {
                state.incomeAmount = data
            }
            if(type === 'expense-amount'){
                state.expenseAmount = data
            }
        },
    }
})

export default transactions.reducer

export const { 
    toggleTransactionMode, 
    addItem, 
    removeItem, 
    updateTransactionsFromLocalStorage
} = transactions.actions
