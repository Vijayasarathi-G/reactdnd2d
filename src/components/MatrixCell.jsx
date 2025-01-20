import React from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { moveJob } from '../redux/actions/jobActions';
import JobCard from './JobCard';

const MatrixCell = ({ x, y, jobs }) => {
  const dispatch = useDispatch();
  console.log(jobs);
  const [{ isOver }, drop] = useDrop({
    accept: 'JOB_CARD',
    drop: (item) => {
      dispatch(moveJob(item.id, x, y));
    },
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });
  const cellJobs = [];
  for (const job of Object.values(jobs)) {
    for (const j of job) {
      console.log(j);
      console.log(j.startTime);
      console.log(j.technicianId);
      if (j.startTime === x && j.technicianId === y) {
        console.log("hello");
        cellJobs.push(j);
      }
      else {
        const temp = {
          id: 0,
          title: 'null',
          technicianId: y,
          startTime: x,
          duration: 2
        }
        cellJobs.push(temp);
      }
    }
  }
  // const jobsArray = Object.entries(jobs);
  // const cellJobs = jobsArray.filter(job => job.startTime === x && job.technicianId === y);
  console.log(cellJobs);

  return (
    <div
      ref={drop}
      style={{
        border: '1px solid #ddd',
        minHeight: '100px',
        backgroundColor: isOver ? 'lightgreen' : 'white'
      }}
    >
      {cellJobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default MatrixCell;
