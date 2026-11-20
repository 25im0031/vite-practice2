import { useState } from 'react'
import './App.css'

// 持ち物1つ分のデータの形
type Item = {
  id: number
  name: string
  checked: boolean
}

function App() {
  // 持ち物リストのデータ
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'スマートフォン', checked: true },
    { id: 2, name: '財布', checked: false },
    { id: 3, name: '家の鍵', checked: false },
  ])

  // 入力欄の文字を覚えておくためのデータ
  const [inputText, setInputText] = useState('')

  // 新しい持ち物を追加する関数
  const addItem = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputText.trim() === '') return

    const newItem: Item = {
      id: Date.now(),
      name: inputText.trim(),
      checked: false,
    }
    setItems([...items, newItem])
    setInputText('')
  }

  // 項目がクリックされたときにチェック状態を反転させる関数
  const toggleItem = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    )
  }

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-slate-800 text-center mb-6">
          🎒 持ち物チェックリスト
        </h1>

        {/* 持ち物を追加する入力フォーム */}
        <form onSubmit={addItem} className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="持ち物を入力..."
            className="flex-1 px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition cursor-pointer"
          >
            追加
          </button>
        </form>

        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition select-none ${
                item.checked
                  ? 'bg-emerald-50 border-emerald-200'
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span
                className={`font-medium ${
                  item.checked ? 'line-through text-slate-400' : 'text-slate-700'
                }`}
              >
                {item.name}
              </span>
              <span className="text-sm font-medium">
                {item.checked ? (
                  <span className="text-emerald-600">✅ 準備OK</span>
                ) : (
                  <span className="text-slate-400">⬜ 未確認</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App