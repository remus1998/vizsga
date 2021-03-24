import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  height: 48,
  width: '90vw',
  color: '#bc865c',
  bottom: 0,
  paddingRight: 20,
  fontStyle: '"Open Sans", sans-serif',
  backgroundColor:'white',
  fontWeight: 600,
  fontSize: '16px',
  letterSpacing: 4,
  position: 'absolute',
});

function ButtonM() {
  return (
    <MyButton className="button">READ MORE</MyButton>
  )
}

export default ButtonM;