export const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 0; hour < 24; hour += 2) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
    }
    return slots;
  };
  
  export const generateTechnicianIds = (count = 10) => {
    return Array.from({length: count}, (_, i) => 100 + i);
  };
  