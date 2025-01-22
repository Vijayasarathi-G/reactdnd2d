export const parseTime = (time) => {
    const [hour, period] = time.split(/(AM|PM)/i);
    let [hours, minutes] = hour.split(':').map(Number);
    if (period.toUpperCase() === 'PM' && hours !== 12) hours += 12;
    if (period.toUpperCase() === 'AM' && hours === 12) hours = 0;
    return hours * 60 + (minutes || 0); // Convert to minutes for comparison
};
