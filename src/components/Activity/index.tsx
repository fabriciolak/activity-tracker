import { Container, Header, Footer } from "./styles";

interface ActivityProps {
  title: string
  uptime: string
  date: string
  startEndDate: string
}

export function Activity({ title, uptime, date, startEndDate }: ActivityProps) {
  return (
    <Container>
      <Header>
        <span>{title}</span>
        <strong>{uptime}</strong>
      </Header>
      <Footer>
        <span>{date}</span>
        <span>{startEndDate}</span>
      </Footer>
    </Container>
  )
}