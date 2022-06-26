import '../../index.css'
import { useSelector } from "react-redux"
import HistoryItem from "../history-item/HistoryItem.component"

const HistoryItems = () => {
    const currentTransactionMode = useSelector(state => state.transactions.currentTransactionMode)
    const incomesArray = useSelector(state => state.transactions.incomesArray)
    const expenseArray = useSelector(state => state.transactions.expenseArray)
    
    return (
        <div>
            {
                (currentTransactionMode === 'income') &&
                incomesArray.map(item => (
                    <HistoryItem key={item.id} item={item} />
                ))
           }
           {
                (currentTransactionMode === 'expense') && 
                expenseArray.map(item => (
                    <HistoryItem item={item} key={item.id} />
                ))
           }
        </div>
    )
}

export default HistoryItems