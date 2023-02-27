import { Activity } from "./components/Activity";
import { CreateActivity } from "./components/CreateActivity";

export function App() {
  return (
    <div>
      <Activity title='Title' uptime='00:00' date='Segunda, Fev 3' startEndDate='data' />

      <CreateActivity />
    </div>
  )
}