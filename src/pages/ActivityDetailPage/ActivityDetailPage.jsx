import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { formatTime, formatDate } from '../../utils/DateUtils.jsx';
import { useParams } from 'react-router-dom';

const ActivityDetailpage = () => {
  const [details, setDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`).then((result) => {
      setDetails(result.data);
    });
  }, []);

  return (
    <div>
      {details && (
        <div>
          <h3>Activity details:</h3>
          <div>
            <div>Date: {formatDate(details.created_at)}</div>
            <div>Time: {formatTime(details.created_at)}</div>
            <div>Direction: {details.direction}</div>
            <div>From: {details.from}</div>
            <div>To: {details.to}</div>
            <div>Via: {details.via}</div>
            <div>Duration: {details.duration + ` seconds`}</div>
            <div>Call type: {details.call_type}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ActivityDetailpage;
