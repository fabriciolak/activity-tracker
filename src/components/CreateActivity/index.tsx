import { ActivityTitle, ActivityInfo, Container, ActivityButton, ActivityInput } from "./styles";

interface CreateActivityProps {
  state: 'new' | 'started'
}

export function CreateActivity() {
  return (
    <Container>
      <ActivityTitle>
        <ActivityInput placeholder="Name your activity" />
        <ActivityButton type="new">A</ActivityButton>
      </ActivityTitle>

      <ActivityInfo>Uptime: 00:04</ActivityInfo>
    </Container>
  )
}