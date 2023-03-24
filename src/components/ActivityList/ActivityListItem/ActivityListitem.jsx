import React from 'react';
import {
  Title,
  ItemContainer,
  CallInfoContainer,
  LeftContainer,
  Subtitle,
  CallTypeContainer,
  DateContainer,
  Date,
  DateType,
  ThreeDots,
  CounterContainer,
  Counter
} from './ActivityListItem.styles.jsx';
import { formatTime, formatTimeType } from '../../../utils/DateUtils.jsx';
import { useNavigate } from 'react-router-dom';
import {
  PhoneMissed,
  PhoneForwarded,
  Phone,
  PhoneCallback,
  Voicemail,
  Error
} from '@material-ui/icons';

const ActivityListItem = ({ item }) => {
  const navigate = useNavigate();

  const hanldeClick = () => {
    navigate(`/activity/${item.id}`);
  };

  const CallType = () => {
    switch (item.call_type) {
      case 'voicemail':
        return <Voicemail />;
      case 'missed':
        if (item.direction === 'outbound') {
          return <PhoneMissed style={{ color: 'red' }} />;
        }
        return <PhoneCallback style={{ color: 'red' }} />;
      case 'answered':
        if (item.direction === 'outbound') {
          return <PhoneForwarded style={{ color: 'green' }} />;
        }
        return <Phone style={{ color: 'green' }} />;
      default:
        return <Error style={{ color: 'red' }} />;
    }
  };

  return (
    <React.Fragment>
      {item && (
        <ItemContainer onClick={hanldeClick}>
          <LeftContainer>
            <CallTypeContainer>
              <CallType />
            </CallTypeContainer>
            <CallInfoContainer>
              <CounterContainer>
                <Title>{item.direction === 'outbound' ? item.to : item.from}</Title>
                {item.count && <Counter>{item.count}</Counter>}
              </CounterContainer>
              {item.via && <Subtitle>via {item.via}</Subtitle>}
            </CallInfoContainer>
          </LeftContainer>
          <DateContainer>
            <ThreeDots />
            <Date>{formatTime(item.created_at)}</Date>
            <DateType>{formatTimeType(item.created_at)}</DateType>
          </DateContainer>
        </ItemContainer>
      )}
    </React.Fragment>
  );
};
export default ActivityListItem;
