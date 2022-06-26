import '../../index.css'
import XMarkLogo from '../../assets/xmark-solid.svg'
import { useSelector, useDispatch } from 'react-redux'
import { toggleModal } from '../../features/modal/modal.slice'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { addItem, updateTransactionsFromLocalStorage } from '../../features/transactions/transactions.slice'

const defaultFormField = {
    description: '',
    amount: 0,
    id: null
}

const Modal = () => {
    const modal = useSelector(state => state.modal.modal)
    const dispatch = useDispatch()
    const currentTransactionMode = useSelector(state => state.transactions.currentTransactionMode)

    const incomeFromLocalStorage = JSON.parse(localStorage.getItem('income'))
    const incomeAmountFromLocalStorage = JSON.parse(localStorage.getItem('income-amount'))
    
    const expenseFromLocalStorage = JSON.parse(localStorage.getItem("expense"))
    const expenseAmountFromLocalStorage = JSON.parse(localStorage.getItem('expense-amount'))

    if(incomeFromLocalStorage){
        dispatch(updateTransactionsFromLocalStorage({ 
            type: 'income', 
            data: incomeFromLocalStorage
        }))
    }
    if(expenseFromLocalStorage){
        dispatch(updateTransactionsFromLocalStorage({ 
            type: 'expense', 
            data: expenseFromLocalStorage
        }))
    }
    if(incomeAmountFromLocalStorage){
        dispatch(updateTransactionsFromLocalStorage({ 
            type: 'income-amount', 
            data: incomeAmountFromLocalStorage 
        }))
    }
    if(expenseAmountFromLocalStorage){
        dispatch(updateTransactionsFromLocalStorage({
            type: 'expense-amount',
            data: expenseAmountFromLocalStorage
        }))
    }


    const [formField, setFormField] = useState(defaultFormField)

    const handleInputs = (e, type) => {
        setFormField(prevFormField => ({ ...prevFormField, [type]: e.target.value, id: nanoid() })
    )}

    const handleToggleModal = () => {
        dispatch(toggleModal())
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { description, amount, id } = formField

        if(description && amount) {
            (currentTransactionMode === 'income') 
                ? dispatch(addItem({ id, description, amount, type: 'income' }))
                : dispatch(addItem({ id, description, amount, type: 'expense' }))

            setFormField(defaultFormField)
        }
    }

    return (
        modal &&
        <div className='modal bg-black bg-opacity-40'>
            <div className='modal m-auto items-center w-4/5 md:w-3/5 lg:w-2/5 bg-white h-96 md:h-[22rem] rounded-3xl p-10 z-40'>
                <h4 className='text-xl md:text-2xl font-semibold'>Create a New Transaction</h4>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className='flex flex-col'>
                        <label className='font-semibold text-sm mt-8'>Description</label>
                        <input 
                            type='text' 
                            className='border h-8 rounded pl-2'
                            value={formField.description}
                            onChange={e => handleInputs(e, 'description')}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-semibold text-sm mt-4'>Amount</label>
                        <input 
                            type='number' 
                            className='border h-8 rounded pl-2' 
                            value={formField.amount}
                            onChange={e => handleInputs(e, 'amount')}
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-indigo-700 cursor-pointer text-white w-full h-10 
                        rounded-xl mt-10 hover:bg-indigo-600 hover:shadow-xl text-xl
                        '
                    >
                        Submit
                    </button>
                </form>
                <img 
                    src={XMarkLogo} 
                    className='absolute -top-10 cursor-pointer right-0 w-6' 
                    alt='x mark' 
                    onClick={handleToggleModal}
                />
            </div>
        </div>
    )
}

export default Modal