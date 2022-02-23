import BraftEditor, { EditorState } from 'braft-editor'
import { ContentUtils } from 'braft-utils'
import { Dispatch, memo, SetStateAction, useCallback, useState } from 'react'

import { languageConfig } from '../const/editorLang'
import ImgUploaderBtn from './ImgUploaderBtn'

interface Props {
  text: string
  setText: Dispatch<SetStateAction<string>>
}

const Editor = ({ text, setText }: Props) => {
  const [editorState, setEditorState] = useState<EditorState>(BraftEditor.createEditorState(text))

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState)
    setText(editorState.toHTML())
  }

  // 插入蘋果
  const onInsertApple = useCallback(() => {
    setEditorState(ContentUtils.insertText(editorState, ''))
  }, [editorState])

  // 上傳圖片
  const onUploadImg = useCallback(
    (url: string) => {
      setEditorState(
        ContentUtils.insertMedias(editorState, [
          {
            type: 'IMAGE',
            url
          }
        ])
      )
    },
    [editorState]
  )

  return (
    <BraftEditor
      value={editorState}
      onChange={onEditorStateChange}
      controlBarClassName="editor-bar"
      // controlBarStyle={{ boxShadow: 'none' }}
      contentClassName="editor"
      placeholder="# braft editor"
      controls={[
        'bold',
        'italic',
        'link',
        'media',
        'separator',
        {
          key: 'underline', // 使用 key 指定 controls 類型
          title: '加個 Line ~', // tooltip title
          text: <div>客製化底線</div> // 圖示，可傳入 JSX
        },
        {
          key: 'insert-apple',
          type: 'button',
          title: '加個 ',
          text: '',
          onClick: onInsertApple
        },
        {
          key: 'upload-img',
          type: 'button',
          title: '圖呢 ಠ·ಠ?',
          text: <ImgUploaderBtn uploadCallback={onUploadImg} />
        }
      ]}
      language={() => languageConfig}
      stripPastedStyles={true}
      media={{
        accepts: {
          image: 'image/png,image/jpeg,image/webp',
          video: false,
          audio: false
        },
        externals: {
          image: false,
          video: false,
          audio: false
        }
      }}
      imageControls={['remove']}
    />
  )
}

export default memo(Editor)
