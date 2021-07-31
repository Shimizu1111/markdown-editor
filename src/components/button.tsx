import * as React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: dodgerblue;
  border: none;
  box-shadow: none;
  color: white;
  font-size: 1rem;
  height: 2rem;
  min-width: 5rem;
  padding: 0 1rem;
  &.cancel {
    background: white;
    border: 1px solid gray;
    color: gray;
  }
`

interface Props {
  // ?マークは、このcacelというパラメータを指定しなくても良いという意味になる
  cancel?: boolean
  children: string
  onClick: () => void
}

// React.FCはコンポーネントを型定義する方法、関数型コンポーネントですよと明記している、typescript使えばこれはいらない
// propsの方はPropsであると明示
export const Button: React.FC<Props> = (props) => (
  // onClickの方はクリックイベントの処理をする関数そのもの
  //<StyledButton  onClick={props.onClick}>
  <StyledButton onClick={props.onClick} className={props.cancel ? 'cancel' : ''}>
    {/* childrenはボタン内に定義するテキスト */}
    {props.children}
  </StyledButton>
)