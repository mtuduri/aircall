import { ArchiveOutlined } from '@material-ui/icons';
import React from 'react';
import {
  ActivitiesContainer,
  ArchiveAllCalls,
  DashedContainer,
  DashedText,
  GroupContainer,
  ListContainer
} from './ActivityList.styles.jsx';
import ActivityListItem from './ActivityListItem/ActivityListitem.jsx';

const ActivityList = ({ activities, archiveAll }) => {
  const groups = (activities && Object.keys(activities)) || [];
  return (
    <ActivitiesContainer>
      <ArchiveAllCalls onClick={archiveAll}>
        <ArchiveOutlined /> Archive all calls
      </ArchiveAllCalls>
      {groups &&
        groups.map((item, index) => (
          <GroupContainer key={index}>
            <DashedContainer>
              <DashedText>{item}</DashedText>
            </DashedContainer>
            <ListContainer>
              {activities[item].map((a) => (
                <ActivityListItem key={a.id} item={a} />
              ))}
            </ListContainer>
          </GroupContainer>
        ))}
    </ActivitiesContainer>
  );
};
export default ActivityList;
