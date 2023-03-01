import { Container, Header, Footer } from "./styles";

interface ActivityProps {
  title: string
  uptime: string
  date: string
  startDate: string
  endDate: string
}

export function Activity({ title, uptime, date, startDate, endDate }: ActivityProps) {
  return (
    <Container>
      <Header>
        <span>{title}</span>
        <strong>{uptime}</strong>
      </Header>
      <Footer>
        <span>{date}</span>
        <span>{startDate} - {endDate}</span>
      </Footer>
    </Container>
  )
}