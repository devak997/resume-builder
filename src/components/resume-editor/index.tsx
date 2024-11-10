import { Resume } from "../../service";
import JsonEditor from "../json-editor";

const ResumeEditor: React.FC<{
  data: Resume;
  onChange: (data: Resume) => void;
}> = ({ data, onChange }) => {
  const handleDataChange = (value: string) => {
    try {
      const data = JSON.parse(value);
      onChange(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="h-full w-full">
      <JsonEditor
        value={JSON.stringify(data, null, "\t")}
        onChange={handleDataChange}
      />
    </div>
  );
};

export default ResumeEditor;
