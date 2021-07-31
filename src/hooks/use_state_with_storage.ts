import { useState } from "react";

// カスタムフックの作成
// initは初期値、keyはlocalStorageに保存する際のkeyになる、戻り値は、string型の引数と関数が戻り値、その関数はsという名前のstring型の引数になる、useStateの戻り値と同じ
export const useStateWithStorage = (init: string, key: string): [string, (s: string) => void] => {
  const [value, setValue] = useState<string>(localStorage.getItem(key) || init)

  // localStorageへの保存＋値の更新の組み合わせをした関数
  const setValueWithStorage = (nextValue: string): void => {
    // 値の更新、新しく入力された内容を更新、最新画面の全部の文字になる
    setValue(nextValue)
    // localStorageへの保存
    localStorage.setItem(key, nextValue)
  }
  
  return [value, setValueWithStorage]
}