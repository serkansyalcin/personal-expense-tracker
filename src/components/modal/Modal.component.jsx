import '../../index.css'
import XMarkLogo from '../../assets/xmark-solid.svg'

const Modal = () => {
    return (
        <div className='modal bg-black bg-opacity-40'>
            <div className='modal m-auto items-center w-2/5 bg-white h-[22rem] rounded-3xl p-10'>
                <h4 className='text-2xl font-semibold'>Create a New Transaction</h4>
                <form>
                    <div className='flex flex-col'>
                        <label className='font-semibold text-sm mt-8'>Description</label>
                        <input type='text' className='border h-8 rounded pl-2'/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-semibold text-sm mt-4'>Amount</label>
                        <input type='number' className='border h-8 rounded pl-2' />
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
                <img src={XMarkLogo} className='absolute top-4 cursor-pointer right-8 w-6' alt='x mark' />
            </div>
        </div>
    )
}

export default Modal