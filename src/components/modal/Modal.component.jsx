import '../../index.css'
import XMarkLogo from '../../assets/xmark-solid.svg'
import { useSelector, useDispatch } from 'react-redux'
import { toggleModal } from '../../features/modal/modal.slice'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { addIncomeItem, addExpenseItem } from '../../features/transactions/transactions.slice'

const defaultFormField = {
    description: '',
    amount: 0,
    id: null
}

const Modal = () => {
    const modal = useSelector(state => state.modal.modal)
    const dispatch = useDispatch()
    const currentTransactionMode = useSelector(state => state.transactions.currentTransactionMode)

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
                ? dispatch(addIncomeItem({  id, description, amount }))
                : dispatch(addExpenseItem({ id, description, amount }))

            setFormField(defaultFormField)
        }
    }

    return (
        modal &&
        <div className='modal bg-black bg-opacity-40'>
            <div className='modal m-auto items-center w-4/5 md:w-3/5 lg:w-2/5 bg-white h-[22rem] rounded-3xl p-10 z-40'>
                <h4 className='text-2xl font-semibold'>Create a New Transaction</h4>
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
                    className='absolute top-4 cursor-pointer right-8 w-6' 
                    alt='x mark' 
                    onClick={handleToggleModal}
                />
            </div>
        </div>
    )
}

export default Modal