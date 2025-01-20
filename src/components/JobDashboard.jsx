import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector } from 'react-redux';
import { generateTimeSlots, generateTechnicianIds } from '../utils/timeUtils';
import MatrixCell from './MatrixCell';

const JobDashboard = () => {
  const jobs = useSelector(state => state.jobs);
  const timeSlots = generateTimeSlots();
  console.log(timeSlots);
  const technicianIds = generateTechnicianIds();
  console.log(technicianIds);

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginLeft: '100px' }}>
          {timeSlots.map(slot => (
            <div key={slot} style={{ flex: 1, textAlign: 'center', padding: '10px' }}>
              {slot}
            </div>
          ))}
        </div>
        {technicianIds.map(techId => (
          <div key={techId} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '100px' }}>Tech {techId}</div>
            {timeSlots.map(slot => (
              <MatrixCell
                key={`${techId}-${slot}`}
                x={slot}
                y={techId}
                jobs={jobs}
              />
            ))}
          </div>
        ))}
      </div>
    </DndProvider >
  );
};

export default JobDashboard;
