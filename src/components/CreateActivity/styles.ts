import { styled } from "@/styles";

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: 349,
  minHeight: 48,
  maxHeight: 74,
  
  p: '12px',
})

export const Input = styled('input', {
  width: '325px',
  height: '24px',
  border: 'none',
  outline: 'none',

  color: '$subtitle',
  fontSize: '$16',
  backgroundColor: '$background',
})

export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  size: '24px',
  color: 'white',
  borderRadius: '$rounded-full',
  border: 'none',
  outline: 'none',

  '.lucide-play': {
    ml: 3
  },

  variants: {
    bgColor: {
      green: {
        background: '$green',
      },
      red: {
        background: '$red',
      },
      yellow: {
        background: '$yellow',
      },
    }
  },
  
  defaultVariants: {
    bgColor: "green"
  }
})

export const Uptime = styled('span', {
  fontSize: '$12',
  fontWeight: '$bold',
  color: '$subtitle'
})
