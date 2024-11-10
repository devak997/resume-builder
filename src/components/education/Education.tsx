import { Education } from "../../service";
import Section from "../section/Section";
import { IconSchool } from "@tabler/icons-react";

const EducationComp: React.FC<{ data: Education }> = ({ data }) => {
  return (
    <Section title="Education" icon={IconSchool}>
      <div className="flex items-center justify-between gap-1 text-base font-semibold">
        <h3>{data.degree}</h3>
        <div className="italic">{data.CGPA} CGPA</div>
      </div>
      <div className="flex items-center justify-between gap-1">
        <h3 className="text-sky-600">{data.institution}</h3>
        <div className="opacity-60">{data.duration}</div>
      </div>
      <ul className="mt-0.5 ml-3 list-disc flex flex-col gap-1">
        {data.achievements.map((a, idx) => (
          <li key={idx}>{a}</li>
        ))}
      </ul>
    </Section>
  );
};

export default EducationComp;
