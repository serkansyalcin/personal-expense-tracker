import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux'

ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics = () => {
    const incomeAmount = useSelector(state => state.transactions.incomeAmount)
    const expenseAmount = useSelector(state => state.transactions.expenseAmount)

    const data = {
      labels: ['Incomes', 'Expense'],
      datasets: [
        {
          label: 'The Graph of Expenses and Incomes',
          data: [Number(incomeAmount), Number(expenseAmount)],
          backgroundColor: [
              'rgba(22, 163, 74, 0.85)',
              'rgba(220, 38, 38, 0.85)',
          ],
          
        },
      ],
    };

    return (
        <div className="rounded-xl w-[32rem] h-80 mb-4 bg-gray-200 p-4">
            <h3 className="text-2xl font-semibold opacity-90">Analytics</h3>
            <div className='w-60 mx-auto'>
                <Pie data={data}/>
            </div>
        </div>
    )
}

export default Analytics