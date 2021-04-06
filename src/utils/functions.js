import * as moment from 'moment';

export const secondToHours = (value) => {
  return value / 60 / 60;
};

export const hoursToSeconds = (value) => {
  return value * 60 * 60;
};

export const formatDate = (initialDate) => {
  const date = moment(initialDate);
  const dateFormated = date.format('DD/MM/YYYY HH:mm');
  return dateFormated;
};
