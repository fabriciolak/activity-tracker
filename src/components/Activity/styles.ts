import { styled } from "@/styles";

export const Container = styled('div', {
  width: '100%',
  maxWidth: 349,
  height: '90px',
  p: '12px',
  background: '$background'
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  
  fontSize: '$16',
  lineHeight: '1.5',
  fontWeight: '$regular',

  '> div': {
    fontWeight: '$bold',
  },
})

export const Footer = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  fontSize: '$12',
  lineHeight: '1.5',
  color: '$subtitle',
})