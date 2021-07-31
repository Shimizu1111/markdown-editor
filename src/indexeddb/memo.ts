import Dexie from 'dexie'

export interface MemoRecord {
  // こちらの型定義の方法はTypeScriptの型定義の方法、IndexDBの型定義の方法ではない
  datetime: string
  title: string
  text: string
}

// -------------------------------- テーブルの作成-------------------------------------------

// DB名はmarkdown-editor、テーブル名ではない
const database = new Dexie('markdown-editor')
// versionはDBのバージョン、momosはインデックス名でデータを呼び出す時に使う、&はポインタでインタフェースにアクセスするために&と書く必要がある
// datetimeカラムにアクセスしている、memosにdatetimeのカラムを登録している
database.version(1).stores({ memos: '&datetime' })
// <>はデータの型定義(総称型)、MemoRecordというデータ型、右側のmemosはdatetimeカラムが入っている
const memos: Dexie.Table<MemoRecord,string> = database.table('memos')


//  -------------------------------- テーブルへの保存-------------------------------------------
// 保存したデータを取り出すためにexportしている
// データを保存する関数
// async・awaitで非同期処理を行う
// 引数としてtitleとtextがあるのは、変更内容がこのtitleとtextに渡されるから
export const putMemo = async (title: string, text: string): Promise<void> => {
  // 日時の登録は保存のタイミングで自動的に付与する、だからデータを保存する関数内で生成
  // フォーマットは ISO8601 の形式で出力
  const datetime = new Date().toISOString()
  await memos.put({ datetime, title, text })
}



