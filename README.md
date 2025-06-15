# 📘 React Complete Learning Guide

This document is designed for beginners and intermediate learners to understand the core concepts of React. You can upload this to GitHub for learning or documentation purposes.

---

## 📌 Table of Contents

1. Introduction to React
2. JSX and Rendering
3. Components (Function & Class)
4. Props & Prop Drilling
5. State & useState
6. Event Handling
7. Conditional Rendering
8. Lists and Keys
9. Forms in React
10. useEffect Hook
11. useRef Hook
12. useContext & Context API
13. React Router (v6+)
14. Custom Hooks
15. Lifting State Up
16. Controlled vs Uncontrolled Components
17. Memoization: React.memo, useMemo, useCallback
18. Error Boundaries
19. Code Splitting (Lazy Loading)
20. Best Practices

---

## 1. 🔰 Introduction to React

React is a JavaScript library for building **user interfaces**, especially **Single Page Applications** (SPA). It uses a **component-based architecture**.

* Developed by Facebook
* Virtual DOM for fast rendering
* Reusable components

## 2. 💠 JSX and Rendering

JSX is a syntax extension of JavaScript that looks like HTML and is used to describe UI.

```jsx
const element = <h1>Hello, world!</h1>;
```

## 3. 📦 Components

### Functional Component:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Class Component:

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## 4. 🔗 Props & Prop Drilling

Props are read-only attributes passed from parent to child.

Prop drilling is passing props through many layers unnecessarily.

## 5. 🧠 State & useState

State is used to store data that changes over time.

```jsx
const [count, setCount] = useState(0);
```

## 6. 🖱️ Event Handling

```jsx
function handleClick() {
  alert('Clicked!');
}
```

## 7. 🔀 Conditional Rendering

```jsx
{isLoggedIn ? <Logout /> : <Login />}
```

## 8. 🔁 Lists and Keys

```jsx
const items = ['Apple', 'Banana'];
items.map((item, index) => <li key={index}>{item}</li>)
```

## 9. 📝 Forms

```jsx
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
```

## 10. ⏱️ useEffect Hook

Runs after every render or specific value change.

```jsx
useEffect(() => {
  // side effect
}, [dependency]);
```

## 11. 🔍 useRef Hook

Used for accessing DOM nodes or keeping mutable values.

## 12. 🧩 useContext & Context API

Avoids prop drilling.

```jsx
const ThemeContext = React.createContext();
const value = useContext(ThemeContext);
```

## 13. 🚦 React Router (v6+)

Routing for SPAs.

```jsx
<Routes>
  <Route path="/home" element={<Home />} />
</Routes>
```

## 14. 🛠️ Custom Hooks

Functions that start with `use` and reuse logic.

```jsx
function useCounter() {
  const [count, setCount] = useState(0);
  return [count, () => setCount(count + 1)];
}
```

## 15. 🔼 Lifting State Up

Move state up to the nearest common ancestor when needed in multiple children.

## 16. 📋 Controlled vs Uncontrolled Components

Controlled: React controls the form inputs.
Uncontrolled: DOM handles the form.

## 17. ⚡ Memoization

* `React.memo`: avoids re-render
* `useMemo`: memoize value
* `useCallback`: memoize function

## 18. 🧱 Error Boundaries

Catch errors in class components.

```jsx
class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    // handle error
  }
}
```

## 19. 🚀 Code Splitting (Lazy Loading)

```jsx
const LazyComponent = React.lazy(() => import('./Component'));
```

## 20. ✅ Best Practices

* Component reusability
* Meaningful names
* Use keys in lists
* Avoid prop drilling (use Context)
* Split large components
* Handle side effects properly

---

## 📂 Recommended File Structure

```
src/
│
├── components/
│   └── Navbar.jsx
│   └── Hero.jsx
│
├── pages/
│   └── Home.jsx
│   └── About.jsx
│
├── App.jsx
├── index.js
└── styles/
    └── app.css
```

---

## 📚 Resources to Learn More

* [React Docs](https://react.dev)
* [React Router Docs](https://reactrouter.com)
* [W3Schools React](https://www.w3schools.com/react/)
* [freeCodeCamp React Course](https://www.youtube.com/watch?v=bMknfKXIFA8)

---

## ✍️ Author

**Manish Kumar**
This guide is created for React learners. Feel free to contribute or improve it.

---

*⭐ Don’t forget to give a star if you use this on GitHub!*
