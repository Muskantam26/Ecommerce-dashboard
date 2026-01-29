import React, { useMemo, useRef } from "react";
import JoditEditor from "jodit-react";

const EmailEditor = ({
  value,
  onChange,
  placeholder = "Write your email message here...",
  height = 300,
}) => {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      height,
      toolbarSticky: false,
      buttons: [
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "|",
        "ul",
        "ol",
        "|",
        "paragraph",
        "|",
        "link",
        "unlink",
      ],
      removeButtons: ["source", "image", "video", "table"],
      showCharsCounter: false,
      showWordsCounter: false,
      showXPathInStatusbar: false,
      placeholder,
    }),
    [height, placeholder]
  );

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <JoditEditor
        ref={editor}
        value={value}
        config={config}
        onChange={onChange}
      />
    </div>
  );
};

export default EmailEditor;
