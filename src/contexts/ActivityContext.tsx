import { ActivityProps } from '@/types/activity'
import { createNewActivityAction } from "@/reducer/actions"
import { ActivityReducer } from "@/reducer/ActivityReducer"
import { createContext, useReducer } from "react"

interface ActivityContextProps {
  children: React.ReactNode
}

interface ActivityContextType {
  activities: ActivityProps[]
  createNewActivity: (data: ActivityProps) => void
}

export const ActivityContext = createContext({} as ActivityContextType)

export function ActivityContextProvider({ children }:ActivityContextProps) {
  const [ state, dispatch ] = useReducer(ActivityReducer, { activities: [] })

  const { activities } = state

  function createNewActivity(data: ActivityProps) {
    dispatch(createNewActivityAction(data))
  }

  return (
    <ActivityContext.Provider value={{ activities, createNewActivity }}>
      {children}
    </ActivityContext.Provider>
  )
}