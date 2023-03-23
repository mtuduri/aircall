import React from 'react';
import ActivityListItem from './ActivityListItem/ActivityListItem.jsx';

const ActivityList = ({ activities }) => {

    return (
        <div>
            {activities && activities.map((item) => (<ActivityListItem key={item.id} item={item} />))}
        </div>
    );

}
export default ActivityList;