import Header from '../components/header'
import ScenarioTabs from '../components/scenarioTabs'
import SummaryTable from '../components/summaryTable'
import Chart from '../components/chart'

function Index() {
  return <div className="bg-pink-50 px-12 py-4" >
    <Header title="Welcome to the FIRE calculator" />
    <p className="p-4">This will be a description of what the app does</p>
    <ScenarioTabs/>
    <SummaryTable/>
    <Chart/>
  </div>
}

export default Index;