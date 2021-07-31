// -----------------------------TypeScriptの内容--------------------------------------
//console.log("hello, webpack + typescript")

// const log = (message: string): void => {
//   console.log(message)
// }

// log('Hello')
// log('Hello')
// log('Hello')
// log('Hello')


// -----------------------------React基礎の内容--------------------------------------
// import * as React from 'react'
// import { render } from 'react-dom'
// styled-componentsはreactのファイルの中でCSSを書けるようにするためのライブラリ
// import styled from 'styled-components'
// const Main = (<h1>Markdown Editor + DevServer</h1>)

// const Header = styled.h1`
//   color: red;
// `
// const Main = (<Header>Markdown Editor</Header>)




// -----------------------------React、マークダウン作成の内容--------------------------------------
import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Editor } from './pages/editor'

// ページ全体に適用できるスタイルを定義している
const GlobalStyle = createGlobalStyle`
body * {
  box-sizing: border-box;
}
`

const Main = (
<>
  <GlobalStyle />
  <Editor />
</>
)


render(Main, document.getElementById('app'))

