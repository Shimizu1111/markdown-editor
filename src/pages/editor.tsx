import * as React from 'react'
import styled from 'styled-components'
import { useStateWithStorage } from '../hooks/use_state_with_storage'
import * as ReactMarkdown from 'react-markdown'
import { putMemo } from '../indexeddb/memo'
import { Button } from '../components/button'

// useState 関数を React から取り出す、これでuseState関数を使えるようにしている
// {  }この中の世界はjavascriptを使うと明示的に伝える
//const { useState } = React

const Header = styled.header`
  align-content: center;
  display: flex;
  font-size: 1.5rem;
  height: 2rem;
  justify-content: space-between;
  left: 0;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
`

const HeaderControl = styled.div`
  height: 2rem;
  display: flex;
  align-content: center;
`

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
`

const TextArea = styled.textarea`
  border-right: 1px solid silver;
  border-top: 1px solid silver;
  bottom: 0;
  font-size: 1rem;
  left: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 50vw;
`

const Preview = styled.div`
  border-top: 1px solid silver;
  bottom: 0;
  overflow-y: scroll;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 50vw;
`

const StorageKey = 'pages/editor:text'

export const Editor: React.FC = () => {
  // const [text, setText] = useState<string>('テキスト入力')
  // localstrageから値を取って来る、初期値は''の部分
  // const [text, SetText] = useState<string>(localStorage.getItem(StorageKey) || '')
  // 引数の左が表示内容の初期値、右がstorageに保存するkeyのPATH名
  const [text, setText] = useStateWithStorage('', StorageKey)
  const saveMemo = (): void => {
    putMemo('Title', text)
  }

  return (
    // この空のタグは <React.Fragment> を短縮した書き方で、実際には描画されないタグ
    // 普通はreturnするときdivを一つしか返せないが、更に大きな要素でくくってあげることで複数要素をreturn出来るようにする
    // だから意味を持たないからのタグを作ってあげている
    <>
      <Header>
        Markdown Editor
        <HeaderControl>
          <Button onClick={saveMemo}>
            保存する
          </Button>
        </HeaderControl>
      </Header>
      <Wrapper>
        {/* <TextArea value="テキスト入力エリア" /> */}
        <TextArea
          // onChangeはイベント処理、フォーム内の内容が変更がされた時に発火、代入された内容が発火条件
          // eventには入力内容が入る
          // onChange = {(event) => {
          //   // event.target.value にテキストの内容が格納 + そのテキスト内容をsetTextに渡すと状態更新
          //   // setText(event.target.value)
          //   const changedText = event.target.value
          //   // localstorageへ値をセットして保存、引数の左がkeyで右がvalue値、変更内容がchangedText
          //   localStorage.setItem(StorageKey, changedText)
          //   SetText(changedText)
          // }}
          onChange={(event) => setText(event.target.value)}
          // useStateで状態管理しているtextという変数を渡す、初期値のvalue要素の表示に必要
          value={text}
        />
        // プレビューエリアの実装
        {/* <Preview>プレビューエリア</Preview> */}
        <Preview>
          <ReactMarkdown>{text}</ReactMarkdown>
        </Preview>
        
      </Wrapper>
    </>
  )
}