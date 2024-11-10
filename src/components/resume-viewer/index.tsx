import { Resume } from "../../service";
import EducationComp from "../education/Education";
import PersonalInfoComp from "../personal-info/PersonalInfo";
import SkillsComp from "../skills/Skills";
import WorkExperiences from "../work-experience/WorkExperiences";

const ResumeViewer: React.FC<{ data: Resume }> = ({ data }) => {
  return (
    <div className="flex flex-col gap-3.5 w-full container mx-auto text-sm">
      <PersonalInfoComp data={data.personalInfo} />
      <WorkExperiences data={data.experience} />
      <EducationComp data={data.education} />
      <SkillsComp data={data.skills} />
    </div>
  );
};

export default ResumeViewer;
