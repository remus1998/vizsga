import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  height: 48,
  width: '94vw',
  color: '#bc865c',
  bottom: 0,
  paddingRight: 20,
  fontStyle: '"Open Sans", sans-serif',
  backgroundColor:'white',
  fontWeight: 600,
  fontSize: '16px',
  letterSpacing: 4,
  position: 'absolute',
  borderBottomRightRadius: 25,
  borderBottomLeftRadius: 25,
  '@media (min-width: 260px) and (max-width: 900px)': {
    width: '84vw'
  },
  '@media (min-width: 900px) and (max-width: 1280px)':{
    width: '90vw'
  }

});

function ButtonM() {
  return (
    <MyButton className="button">READ MORE</MyButton>
  )
}

export default ButtonM;