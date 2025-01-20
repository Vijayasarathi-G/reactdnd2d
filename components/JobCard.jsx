import React from 'react';
import { useDrag } from 'react-dnd';

const JobCard = ({ key, job }) => {
  console.log("hhhhhhh" + JSON.stringify(job));
  const [{ isDragging }, drag] = useDrag({
    type: 'JOB_CARD',
    item: {
      id: job.id,
      technicianId: job.technicianId,
      startTime: job.startTime
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '10px',
        backgroundColor: 'lightblue',
        margin: '5px',
        cursor: 'move'
      }}
    >
      {job.title} - {job.technicianId}
    </div>
  );
};

export default JobCard;
