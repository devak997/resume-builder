import { useEffect, useState } from "react";
import ResumeEditor from "./components/resume-editor";
import ResumeViewer from "./components/resume-viewer";
import { defaultResume, Resume } from "./service";

const App = () => {
  const [resume, setResume] = useState<Resume>(defaultResume);
  const [download, setDownload] = useState<boolean>(false);

  const handlePrint = async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await window.PagedPolyfill.preview();
    window.print();
  };

  useEffect(() => {
    if (download) {
      handlePrint();
    }
  }, [download]);

  if (download) {
    return <ResumeViewer data={resume} />;
  }

  return (
    <div className="h-full w-full flex flex-col md:flex-row">
      <div className="flex-1 h-full w-full min-w-0">
        <ResumeEditor data={resume} onChange={setResume} />
      </div>
      <div className="flex-1 h-full w-full min-w-0 flex flex-col">
        <div className="bg-slate-300 p-2">
          <button
            className="px-2 py-1 bg-blue-700 text-white rounded"
            onClick={() => setDownload(true)}
          >
            Download
          </button>
        </div>
        <div className="flex-1 min-h-0 w-full p-4">
          <ResumeViewer data={resume} />
        </div>
      </div>
    </div>
  );
};

export default App;
