import { formatSeconds } from "@/utils/formartTimer"
import dayjs from "dayjs"
import durationPlugin from 'dayjs/plugin/duration'
import { ChangeEvent, useEffect, useState } from "react"

interface TrackerProps {
  id: string
  title: string
  date: string
  uptime: string
  startDate: string
  endDate: string
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
  const [startTime, setStartTime] = useState<dayjs.Dayjs | null>(null)
  const [currentActivityId, setCurrentActivityId] = useState<string>('')


  function createActivity() {
    if (inputText.length === 0) return alert(`bota um nome`)

    const today = dayjs()

    setTracker((prev) => {
      // const prevActivity = prev.find(activity => activity.id === currentActivityId)

      // if (prevActivity) {
      //   const prevActivityIndex = prev.indexOf(prevActivity)
      //   const updatedPrevActivity = {
      //     ...prevActivity,
      //     uptime: '00:00'
      //   }
      //   prev[prevActivityIndex] = updatedPrevActivity
      // }

      const newActivity: TrackerProps = { 
        id: crypto.randomUUID(), 
        title: inputText, 
        date: dayjs(today).format('dddd[, ]MMM[ ]D'),
        startDate: dayjs(today).format(`HH:mm A`),
        endDate: '',
        uptime,
      }

      setStartTime(today)
      setCurrentActivityId(newActivity.id)
      setIsActivityStarted(prev => !prev)
      return [...prev, newActivity]
    })
  }

  function stopActivity() {

    setTracker((prev) => {
      const prevActivity = prev.find(activity => activity.id === currentActivityId)

      if (prevActivity) {
        const prevActivityIndex = prev.indexOf(prevActivity)
        const updatedPrevActivity: TrackerProps = {
          ...prevActivity,
          uptime,
          endDate: dayjs(dayjs()).format(`HH:mm A`)
        }
        prev[prevActivityIndex] = updatedPrevActivity
      }

      setCurrentActivityId('')
      setInputText('')
      setUptime('00:00')
      setIsActivityStarted(prev => !prev)
      return prev
    })
  }

  function pauseActivity() {
    console.log('atividade pausada')
  }

  function handleActivityName(e: ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value)
  }

  function calculateDiff(startTime: dayjs.Dayjs) {
    const diff = startTime?.diff(dayjs(), 'second')

    return formatSeconds(diff)
  }

  useEffect(() => {
    let intervalId: number
    
    if (!isActivityStarted) {
      
      intervalId = setInterval(() => {
        setUptime(calculateDiff(startTime!))
        // setUptime((prevUptime) => {
        //   const diff = startTime?.diff(startTime, 'second')
        //   const newUptime = formatSeconds(diff!)
        //   return newUptime !== prevUptime ? newUptime : prevUptime
        // })
      }, 1000)
    }

    return () => clearInterval(intervalId)
  }, [isActivityStarted, startTime])

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