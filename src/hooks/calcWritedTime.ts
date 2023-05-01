import moment from 'moment';

type contentDataType = {
  id: number;
  boardName: string;
  nickName: string;
  title: string;
  content: string;
  likes: number;
  createAt: string;
  image: boolean;
  show: boolean;
};

export const calcWritedTime = (data: contentDataType) => {
  if (
    Math.ceil(
      moment.duration(moment().diff(moment(data.createAt))).asMinutes(),
    ) < 60 &&
    Math.ceil(
      moment.duration(moment().diff(moment(data.createAt))).asSeconds(),
    ) > 59
  ) {
    return `${Math.ceil(
      moment.duration(moment().diff(moment(data.createAt))).asMinutes(),
    )}분 전`;
  } else if (
    Math.ceil(
      moment.duration(moment().diff(moment(data.createAt))).asMinutes(),
    ) < 60 &&
    Math.ceil(
      moment.duration(moment().diff(moment(data.createAt))).asSeconds(),
    ) < 60
  ) {
    return '방금';
  } else {
    return `${moment(data.createAt).format('MM/DD HH:mm')}`;
  }
};
