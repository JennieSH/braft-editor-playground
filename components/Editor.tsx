import 'braft-editor/dist/index.css'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import BraftEditor, { EditorState } from 'braft-editor'
import { LanguageConfigType, languageConfig } from '../const/editorLang'

interface Props {
  text: string
  setText: Dispatch<SetStateAction<string>>
}

const Editor = ({ text, setText }: Props) => {
  const [editorState, setEditorState] = useState<EditorState | undefined>(
    BraftEditor.createEditorState(text)
  )

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState)
    setText(editorState.toHTML())
  }

  const languageFn = (languages: LanguageConfigType, context: 'braft-finder' | 'braft-editor') => {
    // if (context === 'braft-finder') {
    //   languages['zh-hant'].controls.media = '123'
    // }

    return languageConfig
  }

  return (
    <BraftEditor
      value={editorState}
      onChange={onEditorStateChange}
      controlBarStyle={{ boxShadow: 'none' }}
      style={{}}
      className="h-full"
      placeholder="# braft"
      controls={['bold', 'italic', 'link', 'media']}
      language={languageFn}
      stripPastedStyles={true}
      media={{
        accepts: {
          image: 'image/png,image/jpeg',
          video: false,
          audio: false
        },
        externals: {
          image: false,
          video: false,
          audio: false
        }
      }}
    />
  )
}

export default Editor
