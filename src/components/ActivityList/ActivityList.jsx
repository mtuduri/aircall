import React from 'react';
import ActivityListItem from './ActivityListItem/ActivityListitem.jsx';
import { ListContainer } from './ActivityList.styles.jsx';

const ActivityList = ({ activities }) => {
  return (
    <ListContainer>
      {activities && activities.map((item) => <ActivityListItem key={item.id} item={item} />)}
    </ListContainer>
  );
};
export default ActivityList;
