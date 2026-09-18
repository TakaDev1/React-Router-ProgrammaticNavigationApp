# 課題

### 問題文

ナビゲーション部分を`Navigation.tsx`として分離し、`NavLink`を使った共通ナビゲーションを作成してください。

### 条件

以下の構成にする。

```text
src/
├── components/
│   └── Navigation.tsx
├── pages/
│   ├── Home.tsx
│   ├── Products.tsx
│   └── About.tsx
└── App.tsx
```

* `Navigation.tsx`に`NavLink`を記述
* `App.tsx`に`BrowserRouter`を記述
* `App.tsx`に`Routes`と`Route`を記述
* `/` → `Home`
* `/products` → `Products`
* `/about` → `About`
* アクティブなページを`font-bold text-blue-500`にする
* 非アクティブなページを`text-gray-500`にする