export const parseTime = (time) => {
    const [hour, period] = time.split(/(AM|PM)/i);
    let [hours, minutes] = hour.split(':').map(Number);
    if (period.toUpperCase() === 'PM' && hours !== 12) hours += 12;
    if (period.toUpperCase() === 'AM' && hours === 12) hours = 0;
    return hours * 60 + (minutes || 0); // Convert to minutes for comparison
};


const STATUS_CLASS_MAP = {
    CMP: "status-cmp",
    ONS: "status-ons",
    ASG: "status-asg",
    HLD: "status-hld",
    CAN: "status-can",
    INR: "status-inr",
    REJ: "status-rej",
    "Slot Available": "status-slot",
    CAP: "status-cap",
    OPN: "status-opn",
};

export const getStatusClass = (status) => STATUS_CLASS_MAP[status] || "status-default";
