import { Rating } from '~/store/modules/auth/types';

const getLevelType = (currentRating: Rating) => {
  if (currentRating === 'ASSISTANT_MANAGE') return '대리';
  else if (currentRating === 'DEPARTMENT_HEAD') return '부장';
  else if (currentRating === 'MANAGING_DIRECTOR') return '상무';
  else if (currentRating === 'BOSS') return '사장';
  else return '신입';
};
export default getLevelType;
