import { ActivityProps } from '@/types/activity'

export enum ActionType {
  CREATE_NEW_ACTIVITY = 'CREATE_NEW_ACTIVITY',
  PAUSE_CURRENT_ACTIVITY = 'PAUSE_CURRENT_ACTIVITY',
  STOP_CURRENT_ACTIVITY = 'STOP_CURRENT_ACTIVITY',
}

export function createNewActivityAction(data: ActivityProps) {
  return {
    type: ActionType.CREATE_NEW_ACTIVITY,
    payload: { data }
  }
}
