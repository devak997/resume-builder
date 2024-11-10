import { IconTrophy } from "@tabler/icons-react";
import Section from "../section/Section";

const AchievementComp: React.FC<{ data: string[] }> = ({ data }) => {
  return (
    <Section title="Achievements" icon={IconTrophy}>
      <ul>
        {data.map((d, idx) => (
          <li key={idx}>{d}</li>
        ))}
      </ul>
    </Section>
  );
};

export default AchievementComp;
