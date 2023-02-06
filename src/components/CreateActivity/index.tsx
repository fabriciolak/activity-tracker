import { useActivity } from "@/hooks/useActivity";
import { Play } from "phosphor-react";
import { useState } from "react";
import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { ActivityTitle, ActivityInfo, Container, ActivityButton, ActivityInput } from "./styles";

export function CreateActivity() {
  const [ name, setName ] = useState('')
  const [startedActivity, setStartedActivity] = useState(false)

  const { createNewActivity } = useActivity()
  
  function handleCreateNewActivity() {
    if(!name) return

    const activityId = crypto.randomUUID()
    const date = new Date()

    const formattedStartedDate = format(date, 'eeee, MMM dd', {
      locale: ptBr
    })
    
    const formattedStartedTime = format(date, 'HH:mm', {
      locale: ptBr
    })

    createNewActivity({
      id: activityId,
      title: name,
      startedDate: formattedStartedDate,
      startedTime: formattedStartedTime,
      endTime: '',
      status: 'started',
    })

    setStartedActivity(true)
    setName('')
  }

  return (
    <Container>
      <ActivityTitle>
        <ActivityInput value={name} disabled={startedActivity} onChange={e => setName(e.target.value)} placeholder="Name your activity" />
        
        {startedActivity ? (
          <>
            <ActivityButton onClick={handleCreateNewActivity} type="paused"><Play size={14} weight="fill" /></ActivityButton>
            <ActivityButton onClick={handleCreateNewActivity} type="ended"><Play size={14} weight="fill" /></ActivityButton>
          </>
        ) : (
          <ActivityButton onClick={handleCreateNewActivity} type="started"><Play size={14} weight="fill" /></ActivityButton>
        )}
      </ActivityTitle>

      <ActivityInfo>Uptime: 00:04</ActivityInfo>
    </Container>
  )
}