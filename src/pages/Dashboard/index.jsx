import { useContext } from 'react';
import { Container } from './HomeStyles';
// import { Orders, Card } from '../../components';
// import { cards } from '../../constants';
import { ThemeCtx } from '../../context/ThemeStore';

const Dashboard = () => {
  const { closed } = useContext(ThemeCtx);

  return (
    <Container closed={closed}>
      <h1>Dashboard</h1>
      {/* <Cards>
        {cards.map((card) => (
          <Card
            key={card.id}
            value={card.value}
            title={card.title}
            icon={card.icon}
          />
        ))}
      </Cards>
      <Orders /> */}
    </Container>
  );
};

export default Dashboard;
