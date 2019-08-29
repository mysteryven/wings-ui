import React from 'react';
import Pane from 'components/Pane'; 
import ButtonMd from './button.md';

console.log(ButtonMd);

const ButtonDoc = () => {
  return (
    <div>
      <Pane content={ButtonMd} />
    </div>
  )
}

export default ButtonDoc;