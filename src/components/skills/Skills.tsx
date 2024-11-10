import { IconDeviceLaptop } from "@tabler/icons-react";
import Section from "../section/Section";

const SkillsComp: React.FC<{ data: string[] }> = ({ data }) => {
  return (
    <Section title="Skills" icon={IconDeviceLaptop}>
      <div>{data.map((s) => s).join(", ")}</div>
    </Section>
  );
};

export default SkillsComp;
