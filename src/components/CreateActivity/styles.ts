import { styled } from "@/styles";

export const Container = styled('div', {
  width: '100%',
  maxWidth: '349px',
  height: '74px',
  
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  gap: '8px',

  p: '12px',
})

export const ActivityTitle = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const ActivityInput = styled('input', {
  fontWeight: '$bold',
  fontSize: '$16',

  color: '$subtitle',

  border: 'none',
  outline: 'none',
  background: 'transparent',
})

export const ActivityInfo = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

  fontWeight: '$bold',
  fontSize: '$12',

  color: '$subtitle'
})

export const ActivityButton = styled('button', {
  size: '24px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  color: '$white',

  br: '$rounded-full',
  border: 'none',
  outline: 'none',

  cursor: 'pointer',

  variants: {
    type: {
      started: {
        backgroundColor: '$green'
      },
      paused: {
        backgroundColor: '$yellow'
      },
      ended: {
        backgroundColor: '$red'
      },
    }
  }
})
