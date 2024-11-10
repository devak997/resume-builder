import {
  IconBrandLinkedin,
  IconLocation,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { PersonalInfo } from "../../service";

const PersonalInfoComp: React.FC<{ data: PersonalInfo }> = ({ data }) => {
  return (
    <div className="flex justify-between gap-8">
      <div>
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <p>{data.summary}</p>
      </div>

      <div className="text-right flex flex-col gap-1">
        <span className="flex items-center gap-1">
          <IconLocation className="w-4 h-4" /> {data.location}
        </span>

        <a className="flex items-center gap-1" href={`tel:${data.phone}`}>
          <IconPhone className="w-4 h-4" /> {data.phone}
        </a>
        <a className="flex items-center gap-1" href={`mailto:${data.email}`}>
          <IconMail className="w-4 h-4" /> {data.email}
        </a>
        <a
          className="flex items-center gap-1"
          href={`https://${data.linkedin}`}
          target="_blank"
        >
          <IconBrandLinkedin className="w-4 h-4" />
          {data.linkedin}
        </a>
      </div>
    </div>
  );
};

export default PersonalInfoComp;
