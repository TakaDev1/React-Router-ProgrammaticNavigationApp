# React-Router-ProgrammaticNavigationApp

React Routerを使用して、ナビゲーションコンポーネントを分離し、`NavLink`による共通ナビゲーションを実装する練習用アプリです。

## 概要

`Navigation.tsx`にナビゲーションを分離し、`App.tsx`でルーティングを管理します。

`NavLink`の`isActive`を使用して、現在表示しているページのナビゲーションにアクティブ状態を適用します。

## 学習内容

* `BrowserRouter`の使い方
* `Routes` / `Route`の使い方
* `NavLink`によるナビゲーション
* `isActive`によるアクティブ状態の判定
* Tailwind CSSによる条件付きスタイリング
* ナビゲーションコンポーネントの分離
* ページコンポーネントの分離

## 使用技術

* React
* TypeScript
* React Router
* Tailwind CSS
* Vite

## ルーティング

| URL         | ページ      |
| ----------- | -------- |
| `/`         | Home     |
| `/products` | Products |
| `/about`    | About    |

## ディレクトリ構成

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

## Navigation.tsx

`Navigation.tsx`に`NavLink`を記述し、共通ナビゲーションを作成します。

```tsx
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "font-bold text-blue-500"
            : "text-gray-500"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive
            ? "font-bold text-blue-500"
            : "text-gray-500"
        }
      >
        Products
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "font-bold text-blue-500"
            : "text-gray-500"
        }
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navigation;
```

## App.tsx

`App.tsx`では`BrowserRouter`、`Routes`、`Route`を使用してルーティングを管理します。

```tsx
import { BrowserRouter, Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

## アクティブ状態

現在表示しているページの`NavLink`には、

```text
font-bold
text-blue-500
```

を適用します。

それ以外の`NavLink`には、

```text
text-gray-500
```

を適用します。

```text
isActive
├── true
│   └── font-bold text-blue-500
│
└── false
    └── text-gray-500
```

## 起動方法

```bash
npm install
```

```bash
npm run dev
```

## まとめ

このアプリでは、ナビゲーションとページをそれぞれコンポーネントとして分離し、`App.tsx`でルーティングを管理する構成を学習します。

特に、**「ナビゲーションの責務」と「ルーティングの責務」を分離すること**を目的としています。
