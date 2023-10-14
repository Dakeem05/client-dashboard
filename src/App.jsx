import QuickMonitoring from "./comopnents/pages/quickMonitoring/QuickMonitoring";
import Metrics from "./comopnents/pages/metrics/Metrics";
import NumberOfAnimals from "./comopnents/pages/NumberOfAnimals/NumberOfAnimals";
import GeneralHealth from "./comopnents/pages/GeneralHealth/GeneralHealth";
import FeedingStatus from "./comopnents/pages/FeedingStatus/FeedingStatus";
import FeedingAlarm from "./comopnents/pages/FeednigAlarm/FeedingAlarm";

function App() {
  return (
    <div className="main">
      <div className="monitor">
        <QuickMonitoring />
        <Metrics />
      </div>
      <div className="stats">
        <NumberOfAnimals />
        <GeneralHealth />
        <FeedingAlarm />
        <FeedingStatus />
      </div>
    </div>
  );
}

export default App;
