import { useActivityTracker } from "@/hooks/useActivityTracker";
import { Pause, Play, Square } from "lucide-react";
import { Activity } from "../Activity";
import { Container, Button, Input, Uptime } from "./styles";

export function CreateActivity() {
  const {
    createActivity,
    pauseActivity,
    stopActivity,
    inputText,
    handleActivityName,
    isActivityStarted,
    tracker,
    uptime
  } = useActivityTracker()

  return (
    <>
      {isActivityStarted ? (
        <Container>
          <Input
            type="text"
            value={inputText}
            onChange={handleActivityName}
            placeholder="Name your activity"
          />

          <Button onClick={() => createActivity(inputText)}>
            <Play fill="#FFF" size={12} />
          </Button>
        </Container>
      ) : (
        <Container css={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '8px' }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
            <h4>{inputText ? inputText : 'Hello form Mars'}</h4>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
              <Button bgColor="yellow" onClick={pauseActivity}>
                <Pause fill="#FFF" size={12} />
              </Button>
              <Button bgColor="red" onClick={stopActivity}>
                <Square fill="#FFF" size={12} />
              </Button>
            </div>
          </div>

          <Uptime>Uptime: {uptime}</Uptime>
        </Container>
      )}

      {tracker.map((item) => (
        <Activity 
          key={item.id}
          title={item.title}
          uptime={item.uptime}
          date={item.date}
          startDate={item.startDate}
          endDate={item.endDate}
        />
      ))}
    </>
  )
}
