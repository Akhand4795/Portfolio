

const TimelineItem = ({ title, subtitle, date, description }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      <h5 className="h4 timeline-item-title" style={{ fontSize: "12px" }}>{subtitle}</h5>
      <span>{date}</span>
      <p className="timeline-text">{description}</p>
    </li>
  );
}

export default TimelineItem;