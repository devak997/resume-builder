import { IconBriefcase } from "@tabler/icons-react";
import { ExperienceItem } from "../../service";
import Section from "../section/Section";
import WorkExperience from "./WorkExperience";

const WorkExperiences: React.FC<{ data: ExperienceItem[] }> = ({ data }) => {
  return (
    <Section title="Experience" icon={IconBriefcase}>
      <ul className="flex flex-col gap-2.5">
        {data.map((d, idx) => (
          <li key={idx}>
            <WorkExperience data={d} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default WorkExperiences;
