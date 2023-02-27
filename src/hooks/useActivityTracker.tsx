import { formatSeconds } from "@/utils/formartTimer"
import dayjs from "dayjs"
import durationPlugin from 'dayjs/plugin/duration'
import { ChangeEvent, useEffect, useState } from "react"

interface TrackerProps {
  id: string
  title: string
  date: string
  startEndDate: string
}

interface UseActivityTrackerProps {
  createActivity: (inputText: string) => void;
  stopActivity: () => void;
  pauseActivity: () => void;
  handleActivityName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputText: string;
  isActivityStarted: boolean;
  tracker: TrackerProps[];
  uptime: string;
}

dayjs.extend(durationPlugin)

export function useActivityTracker(): UseActivityTrackerProps {
  const [inputText, setInputText] = useState<string>('')
  const [isActivityStarted, setIsActivityStarted] = useState<boolean>(true)
  const [tracker, setTracker] = useState<TrackerProps[]>([])
  const [uptime, setUptime] = useState<string>('00:00')

  function createActivity() {
    if (inputText.length === 0) return alert(`bota um nome`)

    const today = new Date()

    setTracker((prev) => 
    [...prev, { 
        id: crypto.randomUUID(), 
        title: inputText, 
        date: dayjs(today).format('dddd[, ]MMM[ ]D'),
        startEndDate: dayjs(today).format(`HH:mm A`)
      }
    ])

    setIsActivityStarted((prev) => !prev)
  }

  // const endTime = new Date()
  // const timeDiffBetween = dayjs(startTime).diff(endTime)
  // const durationTimer = dayjs.duration(timeDiffBetween).asSeconds()

  function stopActivity() {
    setInputText("")
  }

  function pauseActivity() {
    console.log('atividade pausada')
  }

  function handleActivityName(e: ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value)
  }

  return {
    createActivity,
    pauseActivity,
    stopActivity,
    inputText,
    handleActivityName,
    tracker,
    isActivityStarted,
    uptime
  }
}