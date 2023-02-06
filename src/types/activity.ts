export interface ActivityProps {
  id?: string
  title: string
  startedDate: string
  startedTime: string
  endTime?: string
  status?: 'started' | 'paused' | 'ended'
}