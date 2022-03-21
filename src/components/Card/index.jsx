import React from 'react';
import { CardBox, CardContent, CardNumber, CardTitle } from './CardStyles';

const Card = ({ value, title, icon }) => {
  return (
    <CardBox>
      <CardContent>
        <CardNumber>{value}</CardNumber>
        <CardTitle>{title}</CardTitle>
      </CardContent>
      {icon}
    </CardBox>
  );
};

export default Card;
