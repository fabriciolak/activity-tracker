import { ActivityProps } from '@/types/activity'
import { ActivityInfo, ActivityTitle, Container } from "./styles";

export function Activity({
  title,
  startedDate,
  startedTime,
  endTime
}: ActivityProps) {
  return (
    <Container>
      <ActivityTitle>
        <strong>{title}</strong>
        <span>00:00</span>
      </ActivityTitle>
      
      <ActivityInfo>
        <span>{startedDate}</span>
        <span>{startedTime} - {endTime}</span>
      </ActivityInfo>
    </Container>
  )
}