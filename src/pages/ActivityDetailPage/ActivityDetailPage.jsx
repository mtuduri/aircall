import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useActivityApi from '../../hooks/activitiesHook.jsx';
import { formatDate, formatTime } from '../../utils/DateUtils.jsx';

const ActivityDetailpage = () => {
  const { id } = useParams();
  const { activity, getActivity } = useActivityApi();

  useEffect(() => {
    getActivity(id);
  }, []);

  return (
    <div>
      {activity && (
        <div>
          <Link to="/">go back</Link>
          <h3>Activity details:</h3>
          <div>
            <div>Date: {formatDate(activity.created_at)}</div>
            <div>Time: {formatTime(activity.created_at)}</div>
            <div>Direction: {activity.direction}</div>
            <div>From: {activity.from}</div>
            <div>To: {activity.to}</div>
            <div>Via: {activity.via}</div>
            <div>Duration: {activity.duration + ` seconds`}</div>
            <div>Call type: {activity.call_type}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ActivityDetailpage;
