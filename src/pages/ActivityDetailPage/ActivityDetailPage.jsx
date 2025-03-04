import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader.jsx';
import useActivityApi from '../../hooks/activitiesHook.jsx';
import { formatDate, formatTime } from '../../utils/DateUtils.jsx';
import { Container, FieldContainer, Title } from './ActivityDetailPage.styles.jsx';

const ActivityDetailpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { activity, loadingActivity, getActivity, archiveActivity } = useActivityApi();

  useEffect(() => {
    getActivity(id);
  }, []);

  const archive = () => {
    const newValue = !activity.is_archived;
    archiveActivity(id, !activity.is_archived).then(() => {
      navigate(newValue ? '/archived' : '/');
    });
  };

  return (
    <React.Fragment>
      {loadingActivity && <Loader />}
      {!loadingActivity && activity && activity.id && (
        <Container>
          <Link to={activity.is_archived ? '/archived' : '/'}>go back</Link>
          <Title>Activity details:</Title>
          <FieldContainer>
            <div>
              <strong>From: </strong>
              {activity.from}
            </div>
            <div>
              <strong>To: </strong>
              {activity.to}
            </div>
            <div>
              <strong>Via: </strong> {activity.via}
            </div>
            <div>
              <strong>Duration: </strong>
              {activity.duration + ` seconds`}
            </div>
            <div>
              <strong>Direction: </strong> {activity.direction}
            </div>
            <div>
              <strong>Call type: </strong> {activity.call_type}
            </div>
            <div>
              <strong>Date: </strong> {formatDate(activity.created_at)}
            </div>
            <div>
              <strong>Time: </strong> {formatTime(activity.created_at)}
            </div>
          </FieldContainer>
          <Button variant="contained" color="primary" onClick={archive}>
            {activity.is_archived ? 'Unarchive' : 'Archive'}
          </Button>
        </Container>
      )}
    </React.Fragment>
  );
};
export default ActivityDetailpage;
