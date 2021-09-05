import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .serviceItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServiceSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibusmi aliquam libero finibus, a feugiat ligula eleifend.',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">{icon}</div>
      <div className="serviceItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
