/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ChangeEvent, memo, useCallback, useRef } from "react";

interface Props {
  uploadCallback: (src: string) => void;
}

const ImgUploadBtn = ({ uploadCallback }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // trigger upload event to open local folder
  const onPick = useCallback(() => {
    if (!inputRef.current) return;
    inputRef.current.click();
  }, []);

  //
  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    try {
      // do somethings when image was loaded successfully
      const src = URL.createObjectURL(e.target.files[0]);

      console.log("Img Uploaded Success");
      uploadCallback(src);
    } catch (error) {
      console.log("Catch Error: ", error);
    } finally {
      e.target.value = ""; // reset input file
      console.log("finally");
    }
  };

  return (
    <>
      <input ref={inputRef} name="myFile" type="file" className="hidden" onChange={onUpload} />
      <span onClick={onPick}>圖片</span>
    </>
  );
};

export default memo(ImgUploadBtn);
