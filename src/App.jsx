import { useState, useEffect } from 'react'
import './App.css'
import ClientsTable from './components/ClientsTable'
import { data } from './assets/clients.json'
import clientsPDF from './assets/clientsPDF'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'

function App() {
  const [year, setYear] = useState({
    labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
    datasets: [{
      label: 'Clientes por ano',
      data: [6, 7, 5, 8, 11, 9, 5],
      backgroundColor: ['brown', 'cyan']
    }]
  })

  const [job, setJob] = useState({
    labels: ['Desenvolvedor', 'Marketing', 'Vendedor', 'Gerente', 'Produtor'],
    datasets:[{
      label: 'Profissão dos clientes',
      data: [15, 17, 7, 8, 3],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(6, 136, 6)',
        'rgb(119, 119, 233)'
      ]
    }]
  })

  return (
    <div className="App">
      <ClientsTable />
      <BarChart chartData={year} />
      <PieChart chartData={job}/>
      <button onClick={(e) => clientsPDF(data)}>Gerar PDF</button>

    </div>
  )
  // 
}

export default App
