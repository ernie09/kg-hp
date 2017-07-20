import { LOAD_PP_SENIOR, LOAD_PP_JUNIOR } from '../actions/PrinzenPaarAction';

function ppChange(ppState = [], action) {
  switch (action.type) {
    case LOAD_PP_SENIOR:
      return {
        ...ppState,
        senior: action.senior
      };
    case LOAD_PP_JUNIOR:
      return {
        ...ppState,
        junior: action.junior
      };
    default:
      return ppState;
  }
}

export default ppChange;
