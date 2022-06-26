import { useSelector } from "react-redux"

const Balance = () => {
    const incomeAmount = useSelector(state => state.transactions.incomeAmount)
    const expenseAmount = useSelector(state => state.transactions.expenseAmount)

    const balance = (Number(incomeAmount) - Number(expenseAmount)).toFixed(2)

    return (
        <div className="flex flex-col bg-indigo-700 rounded-xl bg-opacity-90
         w-[32rem] h-64 justify-center items-center font-bold">
            <div>
                <p className="text-sm uppercase text-gray-100 m-auto">balance</p>
                <div className="text-6xl text-white">${ balance }</div>
            </div>
        </div>
    )
}

export default Balance