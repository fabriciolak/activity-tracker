import { ActivityProps } from '@/types/activity'
import { produce } from 'immer'
import { ActionType } from "./actions"

interface ActivityState {
  activities: ActivityProps[]
}

interface Action {
  type: ActionType
  payload: any
}

export function ActivityReducer(state: ActivityState, action: Action) {
  switch(action.type) {
    case ActionType.CREATE_NEW_ACTIVITY: {
      return produce(state, (draft) => {
        draft.activities.push(action.payload.data)
      })
    }

    default:
      return state
  }
}