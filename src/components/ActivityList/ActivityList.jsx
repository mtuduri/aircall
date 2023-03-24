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

const ActivityList = ({ activities, archiveFn, archiveText }) => {
  const groups = (activities && Object.keys(activities).reverse()) || [];
  return (
    <ActivitiesContainer>
      <ArchiveAllCalls onClick={archiveFn}>
        <ArchiveOutlined /> {archiveText}
      </ArchiveAllCalls>
      {groups &&
        groups.map((item, index) => (
          <GroupContainer key={index}>
            <DashedContainer>
              <DashedText>{item}</DashedText>
            </DashedContainer>
            <ListContainer>
              {activities[item]
                .sort((a, b) => {
                  const dateA = new Date(a.created_at);
                  const dateB = new Date(b.created_at);
                  return dateB - dateA;
                })
                .map((a) => (
                  <ActivityListItem key={a.id} item={a} />
                ))}
            </ListContainer>
          </GroupContainer>
        ))}
    </ActivitiesContainer>
  );
};
export default ActivityList;
