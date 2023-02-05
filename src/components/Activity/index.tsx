import { ActivityInfo, ActivityTitle, Container } from "./styles";

interface ActivityProps {
  title?: string
}

export function Activity({ title }: ActivityProps) {
  return (
    <Container>
      <ActivityTitle>
        <strong>Making things</strong>
        <span>00:00</span>
      </ActivityTitle>
      
      <ActivityInfo>
        <span>Friday, Fab 3</span>
        <span>9:00 PM - 10:00 PM</span>
      </ActivityInfo>
    </Container>
  )
}