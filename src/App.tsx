import { useState } from 'react'
import './App.css'

// 持ち物1つ分のデータの形
type Item = {
  id: number
  name: string
  checked: boolean
}

function App() {
  // 持ち物リストのデータ（最初はサンプルを入れておきます）
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'スマートフォン', checked: true },
    { id: 2, name: '財布', checked: false },
    { id: 3, name: '家の鍵', checked: false },
  ])

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-slate-800 text-center mb-6">
          🎒 持ち物チェックリスト
        </h1>

        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200"
            >
              <span className="text-slate-700 font-medium">{item.name}</span>
              <span className="text-sm text-slate-400">
                {item.checked ? '✅ 準備OK' : '⬜ 未確認'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App