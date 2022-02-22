const languageConfig = {
  base: {
    remove: '刪除',
    cancel: '取消',
    confirm: '確定',
    inert: '插入',
    width: '宽度',
    height: '高度'
  },
  controls: {
    clear: '清除内容',
    undo: '撤銷',
    redo: '重做',
    fontSize: '字號',
    color: '顏色',
    textColor: '文字顏色',
    backgroundColor: '背景顏色',
    tempColors: '臨時顏色',
    bold: '粗體',
    lineHeight: '行高',
    letterSpacing: '字間距',
    textIndent: '段落縮進',
    increaseIndent: '增加縮進',
    decreaseIndent: '减少縮進',
    border: '邊框',
    italic: '斜體',
    underline: '下劃線',
    strikeThrough: '刪除線',
    fontFamily: '字體',
    textAlign: '文本對齊',
    alignLeft: '居左',
    alignCenter: '居中',
    alignRight: '居右',
    alignJustify: '兩端對齊',
    floatLeft: '左浮動',
    floatRight: '右浮動',
    superScript: '上標',
    subScript: '下標',
    removeStyles: '清除樣式',
    headings: '標題',
    header: '標題',
    normal: '常規',
    orderedList: '有序列表',
    unorderedList: '無序列表',
    blockQuote: '引用',
    code: '代碼',
    link: '鏈接',
    unlink: '清除鏈接',
    hr: '水平線',
    media: '媒體',
    mediaLibirary: '媒體庫',
    emoji: 'emoji',
    fullscreen: '全螢幕',
    exitFullscreen: '退出全螢幕'
  },
  linkEditor: {
    textInputPlaceHolder: '輸入鏈接文字',
    linkInputPlaceHolder: '輸入鏈接網址',
    inputWithEnterPlaceHolder: '輸入鏈接地址並確定',
    openInNewWindow: '在新視窗打開',
    removeLink: '移除鏈接'
  },
  audioPlayer: {
    title: '播放音源'
  },
  videoPlayer: {
    title: '播放影片',
    embedTitle: '嵌入式媒體'
  },
  media: {
    image: '圖像',
    video: '影片',
    audio: '音頻',
    embed: '嵌入式媒體'
  },
  // braft-finder
  remove: '刪除',
  cancel: '取消',
  insert: '插入所選項目',
  width: '寬度',
  height: '高度',
  image: '圖片',
  video: '視頻',
  audio: '音頻',
  embed: '嵌入式媒體',
  caption: '媒體庫',
  dragTip: '點擊或拖動文件至此',
  dropTip: '放開鼠標以上傳',
  selectAll: '選擇全部',
  deselect: '取消選擇',
  removeSelected: '刪除選中項目',
  externalInputPlaceHolder: '資源名稱|資源地址',
  externalInputTip: '使用“|”分隔資源名稱和資源地址',
  addLocalFile: '添加本地資源',
  addExternalSource: '添加網絡資源',
  unnamedItem: '未命名項目',
  confirmInsert: '插入選中項目'
}

type LanguageConfigType = keyof typeof languageConfig

export { languageConfig }
export type { LanguageConfigType }
