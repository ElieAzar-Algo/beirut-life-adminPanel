import React from 'react';
import { Container, Cards } from './HomeStyles';
import Card from '../../components/Card';
import Orders from '../../components/Orders';
import { cards } from '../../constants';

const Home = ({ toggled }) => {
  return (
    <Container toggled={toggled}>
      <Cards>
        {cards.map((card) => (
          <Card
            key={card.id}
            value={card.value}
            title={card.title}
            icon={card.icon}
          />
        ))}
      </Cards>
      <Orders />
    </Container>
  );
};

export default Home;
