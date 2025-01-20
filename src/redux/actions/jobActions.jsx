export const MOVE_JOB = 'MOVE_JOB';
export const ADD_JOB = 'ADD_JOB';

export const moveJob = (jobId, newX, newY) => ({
  type: MOVE_JOB,
  payload: { jobId, newX, newY }
});

export const addJob = (job) => ({
  type: ADD_JOB,
  payload: job
});
