import { EditorView, ViewUpdate } from "@codemirror/view";
import { useEffect, useRef } from "react";
import { basicSetup } from "./basicSetup";
import { EditorState } from "@codemirror/state";
import { json } from "@codemirror/lang-json";

const editorTheme = EditorView.theme({
  "&": {
    height: "100%",
  },
});

const JsonEditor: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const view = new EditorView({
      state: EditorState.create({
        doc: value,
        extensions: [
          basicSetup,
          editorTheme,
          json(),
          EditorView.editable.of(false),
        ],
      }),
      parent: ref.current,
    });

    EditorView.updateListener.of((v: ViewUpdate) => {
      if (!v.docChanged) {
        return;
      }

      onChange(v.state.doc.toString());
    });

    return () => view.destroy();
  }, [ref, value, onChange]);

  return <div className="w-full h-full border" ref={ref} />;
};

export default JsonEditor;
