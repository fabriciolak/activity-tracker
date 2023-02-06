import { Activity } from "@/components/Activity";
import { CreateActivity } from "@/components/CreateActivity";
import { useActivity } from "./hooks/useActivity";

export function App() {
  const { activities } = useActivity()

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <CreateActivity />
      {activities && (
        activities.map((activity, index) => (
          <Activity
            title={activity.title}
            startedDate={activity.startedDate}
            startedTime={activity.startedTime}
            status={activity.status}
            key={activity.id}
          />
        ))
      )}
    </div>
  )
}