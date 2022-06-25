import '../../index.css'

const ToggleButtons = () => {
    return (
        <div className="flex justify-between items-center py-8 px-16 bg-indigo-100 
        w-[38rem] rounded-full h-24 text-2xl relative">
            <div className="toggle-button-styles">
                Income
            </div>
            <div className="toggle-button-styles text-black">
                Expense
            </div>
            <span className='active-button-state'/>
        </div>
    )
}

export default ToggleButtons