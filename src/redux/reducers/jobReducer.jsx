import { MOVE_JOB, ADD_JOB } from '../actions/jobActions';

const initialState = {
  jobs: [
    { 
      id: 1, 
      title: 'AC Repair', 
      technicianId: 101, 
      startTime: '10:00', 
      duration: 2 
    },
    { 
        id: 2, 
        title: 'TV Repair', 
        technicianId: 102, 
        startTime: '12:00', 
        duration: 2 
      },
    // More initial jobs
  ]
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_JOB:
      return {
        ...state,
        jobs: state.jobs.map(job => 
          job.id === action.payload.jobId
            ? { 
                ...job, 
                technicianId: action.payload.newY,
                startTime: action.payload.newX
              }
            : job
        )
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
    default:
      return state;
  }
};

export default jobReducer;
