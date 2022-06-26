import WalletLogo from '../../assets/wallet-solid.svg'
import TrashLogo from '../../assets/trash-can-solid.svg'
import { useSelector } from 'react-redux'

const HistoryItem = ({ item }) => {
    const currentTransactionMode = useSelector(state => state.transactions.currentTransactionMode)
    
    let dynamicContainerBorderStyles = '';

    (currentTransactionMode === 'income')
        ? dynamicContainerBorderStyles = 'border-green-600'
        : dynamicContainerBorderStyles = 'border-red-600'

    return (
        <div className={`history-item-container ${dynamicContainerBorderStyles}`}>
            <img 
                src={WalletLogo} 
                alt="wallet logo" 
                className="w-6 mr-4"
            />
            <h2 className="text-2xl">{ item.description }</h2>
            <p className="ml-auto font-bold text-lg">${ Number(item.amount).toFixed(2) }</p>
            <img 
                src={TrashLogo} 
                alt='trash can logo' 
                className="w-6 mr-2 ml-12" 
            />
        </div>
    )
}

export default HistoryItem