import React from 'react';
import { Title, ItemContainer, ActivityIcon, Date } from './ActivityListItem.styles.jsx';
import moment from 'moment';

const ActivityListItem = ({ item }) => {
  const formatDate = (date) => {
    const momentDate = moment(date);
    return momentDate.format('hh:mm A');
  };

  return (
    <React.Fragment>
      {item && (
        <ItemContainer>
          <ActivityIcon>{item.direction === 'outbound' ? 'saliente' : 'entrante'}</ActivityIcon>
          <Title>{item.from}</Title>
          <p>tried to call on {item.via}</p>
          <Date>{formatDate(item.created_at)}</Date>
        </ItemContainer>
      )}
    </React.Fragment>
  );
};
export default ActivityListItem;
