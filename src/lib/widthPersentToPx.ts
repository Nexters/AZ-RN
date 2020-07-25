import Layout from '~/constants/Layout';

const widthPersentToPx = (percent: number) => {
  return `${Layout.width * percent}px`;
};

export default widthPersentToPx;
