import moment from 'moment';

export const formatTime = (date) => {
  const momentDate = moment(date);
  return momentDate.format('hh:mm A');
};

export const formatDate = (date) => {
  const momentDate = moment(date);
  return momentDate.format('LL');
};
