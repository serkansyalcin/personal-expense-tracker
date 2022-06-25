import PlusIcon from '../../assets/plus-solid.svg'

const History = () => {
    return (
        <div className="w-[38rem] h-auto p-8 rounded-xl bg-gray-200">
            <h3 className="text-2xl font-semibold">History</h3>
            <div className='text-center text-3xl mt-8 font-bold'>
                No transactions added!
            </div>
            <div className='bg-indigo-700 mt-20 w-16 h-16 rounded-full 
                flex justify-center items-center hover:bg-indigo-500 ml-auto
                cursor-pointer'
            >
                <img src={PlusIcon} alt='plus icon' className='w-8 block'/>
            </div>
        </div>
    )
}

export default History