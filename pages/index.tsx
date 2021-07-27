import Header from "../components/header";
import ScenarioTabs from "../components/scenarioTabs";
import SummaryTable from "../components/summaryTable";
import Chart from "../components/chart";

function Index() {
  return (
    <>
      <Header />
      <header className="shadow">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
          <p className="p-4">This will be a description of what the app does</p>
        </div>
      </header>
      <main>
        <div className="bg-white px-12 py-4">
          <ScenarioTabs />
          <SummaryTable />
          <Chart />
        </div>
      </main>
    </>
  );
}

export default Index;
