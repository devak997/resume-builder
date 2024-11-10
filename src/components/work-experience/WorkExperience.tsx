import { ExperienceItem } from "../../service";

const WorkExperience: React.FC<{ data: ExperienceItem }> = ({ data }) => {
  return (
    <div>
      <div className="flex flex-col gap-0">
        <div className="flex items-center justify-between gap-1 text-base font-semibold">
          <h3>{data.company}</h3>
          <span className="italic pr-0.5">{data.location}</span>
        </div>
        <div className="flex items-center justify-between gap-1">
          <span className="text-sky-600">{data.role}</span>
          <span className="opacity-60">{data.duration}</span>
        </div>
      </div>

      <ul className="list-disc ml-4 flex flex-col gap-1 mt-0.5">
        {data.responsibilities.map((r, idx) => (
          <li key={idx}>
            <p>{r}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;
