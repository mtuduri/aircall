import React from 'react';
import ActivityListItem from './ActivityListItem/ActivityListitem.jsx';
import { ListContainer, ArchiveAllCalls } from './ActivityList.styles.jsx';
import { ArchiveOutlined } from '@material-ui/icons';

const ActivityList = ({ activities, archiveAll }) => {
  return (
    <div>
      <ListContainer>
        <ArchiveAllCalls onClick={archiveAll}>
          <ArchiveOutlined /> Archive all calls
        </ArchiveAllCalls>
        {activities && activities.map((item) => <ActivityListItem key={item.id} item={item} />)}
      </ListContainer>
    </div>
  );
};
export default ActivityList;
