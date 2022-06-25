import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Incomes', 'Expense'],
    datasets: [
      {
        label: 'The Graph of Expenses and Incomes',
        data: [40, 30],
        backgroundColor: [
            'rgba(22, 163, 74, 0.85)',
            'rgba(220, 38, 38, 0.85)',
        ],
        
      },
    ],
  };

const Analytics = () => {
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