import { ChangeEvent, memo, useCallback, useRef } from 'react'

interface Props {
  uploadCallback: (key: string) => void
}

const ImgUploaderBtn = ({ uploadCallback }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onPick = useCallback(() => {
    if (!inputRef.current) return
    inputRef.current.click()
  }, [])

  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    try {
      console.log('Img Uploaded Success')
      const src = URL.createObjectURL(e.target.files[0])
      console.log(src)
      uploadCallback(src)
    } catch (error) {
      console.log('Catch Error: ', error)
    } finally {
      e.target.value = '' // reset input file
      console.log('finally')
    }
  }

  return (
    <>
      <input ref={inputRef} name="myFile" type="file" className="hidden" onChange={onUpload} />
      <span onClick={onPick}>圖片</span>
    </>
  )
}

export default memo(ImgUploaderBtn)
