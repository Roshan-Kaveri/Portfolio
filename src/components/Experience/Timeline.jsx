import TimelineItem from "./TimelineItem";

const Timeline = ({ data }) => (
  <div className="relative mx-auto w-full max-w-4xl mt-10 px-4">
    {data.map((item, index) => (
      <TimelineItem key={index} {...item} isRight={index % 2 === 1} />
    ))}
  </div>
);

export default Timeline;
