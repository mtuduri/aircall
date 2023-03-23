import React from 'react';
import { Title, ItemContainer, ActivityIcon, Date } from './ActivityListItem.styles.jsx';
import { formatTime } from '../../../utils/DateUtils.jsx';
import { useNavigate } from 'react-router-dom';

const ActivityListItem = ({ item }) => {
  const navigate = useNavigate();

  const hanldeClick = () => {
    navigate(`/activity/${item.id}`);
  };

  return (
    <React.Fragment>
      {item && (
        <ItemContainer onClick={hanldeClick}>
          <ActivityIcon>{item.direction === 'outbound' ? 'saliente' : 'entrante'}</ActivityIcon>
          <Title>{item.from}</Title>
          <p>tried to call on {item.via}</p>
          <Date>{formatTime(item.created_at)}</Date>
        </ItemContainer>
      )}
    </React.Fragment>
  );
};
export default ActivityListItem;
