import language from "@/const/language";
import BraftEditor, { EditorState } from "braft-editor";
import { ContentUtils } from "braft-utils";
import { Dispatch, memo, SetStateAction, useCallback, useState } from "react";
import ImgUploadBtn from "./ImgUploadBtn";

interface Props {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

const Editor = ({ text, setText }: Props) => {
  const [editorState, setEditorState] = useState<EditorState>(BraftEditor.createEditorState(text));

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    setText(editorState.toHTML());
  };

  // insert apple
  const onInsertApple = useCallback(() => {
    setEditorState(ContentUtils.insertText(editorState, ""));
  }, [editorState]);

  // upload images
  const onUploadImg = useCallback(
    (url: string) => {
      setEditorState(
        ContentUtils.insertMedias(editorState, [
          {
            type: "IMAGE",
            url
          }
        ])
      );
    },
    [editorState]
  );

  return (
    <BraftEditor
      value={editorState}
      onChange={onEditorStateChange}
      controlBarClassName="editor-bar"
      contentClassName="editor"
      placeholder="# braft editor"
      controls={[
        "bold",
        "italic",
        "link",
        "media",
        "separator",
        {
          key: "underline", // 使用 key 指定 controls 類型，覆寫原生的 underline
          title: "加個 Line ~", // tooltip title
          text: <div>客製化底線</div> // icon，可傳入 JSX
        },
        {
          key: "insert-apple",
          type: "button",
          title: "加個 ",
          text: "",
          onClick: onInsertApple
        },
        {
          key: "upload-img",
          type: "button",
          title: "圖呢 ಠ·ಠ?",
          text: <ImgUploadBtn uploadCallback={onUploadImg} />
        }
      ]}
      language={() => language}
      stripPastedStyles={true}
      media={{
        accepts: {
          image: "image/png,image/jpeg,image/webp",
          video: false,
          audio: false
        },
        externals: {
          image: false,
          video: false,
          audio: false
        }
      }}
      imageControls={["remove"]}
    />
  );
};

export default memo(Editor);
