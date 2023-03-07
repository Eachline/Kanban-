import Button from 'components/Button';
import ButtonIcon from 'components/ButtonIcon';
import CardItem from 'components/CardItem';
import CardList from 'components/CardList';
import ColumnItem from 'components/ColumnItem';
import React from 'react';
import styled from 'styled-components';

export const App: React.FC = () => {
   return (
      <div>
         <Button />
         <ButtonIcon />
         <CardItem />
         <CardList />
         <ColumnItem />
      </div>
   );
};
