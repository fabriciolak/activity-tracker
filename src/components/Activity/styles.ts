import { styled } from "@/styles"

export const Container = styled('div', {
  width: '100%',
  maxWidth: '349px',
  height: '74px',

  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '8px',

  p: '12px',
  border: '1px solid'
})

export const ActivityTitle = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  fontWeight: '$bold',
  fontSize: '$16',

  color: '$title'
})

export const ActivityInfo = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  fontWeight: '$bold',
  fontSize: '$12',

  color: '$subtitle'
})