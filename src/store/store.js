import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '../features/modal/modal.slice'
import transactionsReducer from '../features/transactions/transactions.slice'

const store = configureStore({
    reducer:{
        modal: modalReducer,
        transactions: transactionsReducer
    }
})

export default store