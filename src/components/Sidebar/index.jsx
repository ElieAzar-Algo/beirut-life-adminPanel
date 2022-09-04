import { useState} from 'react';
import {
  Container,
  Navigation,
  BarList,
  BarListItem,
  BarListItemLink,
  Title,
} from './SidebarStyles';
import { sidebarItems } from '../../constants';

const Sidebar = ({closed}) => {
  const [selected, setSelected] = useState('');

  return (
    <Container>
      <Navigation closed={closed}>
        <BarList>
          {sidebarItems.map((sbi) => (
            <BarListItem
              key={sbi.id}
              selected={selected === sbi.title}
              onClick={() => setSelected(sbi.title)}
            >
              <BarListItemLink to={sbi.path} selected={selected === sbi.title}>
                {sbi.icon}
                <Title>{sbi.title}</Title>
              </BarListItemLink>
            </BarListItem>
          ))}
        </BarList>
      </Navigation>
    </Container>
  );
};

export default Sidebar;
