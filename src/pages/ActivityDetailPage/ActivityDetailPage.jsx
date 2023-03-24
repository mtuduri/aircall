import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader.jsx';
import useActivityApi from '../../hooks/activitiesHook.jsx';
import { formatDate, formatTime } from '../../utils/DateUtils.jsx';
import { Container, FieldContainer, Title } from './ActivityDetailPage.styles.jsx';

const ActivityDetailpage = () => {
  const { id } = useParams();
  const { activity, loadingActivity, getActivity } = useActivityApi();

  useEffect(() => {
    getActivity(id);
  }, []);

  return (
    <React.Fragment>
      {loadingActivity && <Loader />}
      {!loadingActivity && activity && (
        <Container>
          <Link to="/">go back</Link>
          <Title>Activity details:</Title>
          <FieldContainer>
            <div>
              <strong>Date:</strong> {formatDate(activity.created_at)}
            </div>
            <div>
              <strong>Time:</strong> {formatTime(activity.created_at)}
            </div>
            <div>
              <strong>Direction:</strong> {activity.direction}
            </div>
            <div>
              <strong>From:</strong>
              {activity.from}
            </div>
            <div>
              <strong>To:</strong>
              {activity.to}
            </div>
            <div>
              <strong>Via:</strong> {activity.via}
            </div>
            <div>
              <strong>Duration:</strong>
              {activity.duration + ` seconds`}
            </div>
            <div>
              <strong>Call type:</strong> {activity.call_type}
            </div>
          </FieldContainer>
        </Container>
      )}
    </React.Fragment>
  );
};
export default ActivityDetailpage;
