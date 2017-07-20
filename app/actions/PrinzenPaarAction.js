/**
 * Action types
 */
export const LOAD_PP_SENIOR = 'LOAD_PP_SENIOR';
export const LOAD_PP_JUNIOR = 'LOAD_PP_JUNIOR';

/**
 * Action creators
 */
export function loadPPSenior(senior) {
  return {
    type: LOAD_PP_SENIOR,
    senior
  };
}

export function loadPPJunior(junior) {
  return {
    type: LOAD_PP_JUNIOR,
    junior
  };
}
