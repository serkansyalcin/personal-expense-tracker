import PlusIcon from '../../assets/plus-solid.svg'
import Modal from '../modal/Modal.component'
import { toggleModal } from '../../features/modal/modal.slice'
import { useDispatch } from 'react-redux'
import HistoryItems from '../history-items/HistoryItems.component'

const History = () => {
    const dispatch= useDispatch()

    const handleToggleModal = () => {
        dispatch(toggleModal())
    }

    return (
        <div className="w-[38rem] h-auto p-8 rounded-xl bg-gray-200">
            <h3 className="text-2xl font-semibold">History</h3>
            <HistoryItems />
            <div 
                className='bg-indigo-700 mt-20 w-16 h-16 rounded-full 
                flex justify-center items-center hover:bg-indigo-500 ml-auto
                cursor-pointer'
                onClick={handleToggleModal}

            >
                <img 
                    src={PlusIcon} 
                    alt='plus icon' 
                    className='w-8 block'
                />
            </div>
            <Modal />
        </div>
    )
}

export default History