# 🧩 Dev Stack

**Dev Stack** is a browsing and shortlist-building app for developers. It lists 15 popular frontend, backend, database, language, styling, DevOps and tooling technologies as cards, and lets you collect the ones you're interested in into a personal "Your Stack" panel — without letting you add the same tool twice.

## 🛠 Built with

- **React 18** (functional components + hooks)
- **Vite** — dev server and build tool
- **Tailwind CSS** + **DaisyUI** — styling
- **react-toastify** — toast notifications
- **JavaScript (ES6+)**
- **JSON** — technology data, loaded at runtime via `fetch`

## ✨ Features

1. **Live technology catalog** — 15 technologies loaded from `technologies.json` (not hardcoded), rendered as a responsive card grid (1 column on mobile, 2 on tablet, 3 on desktop), each showing an icon, badge, category, difficulty and star rating.
2. **One-click stack building** — clicking "Add to Stack" moves a technology into the "Your Stack" sidebar, disables its card button, and shows a toast. Trying to add it again is blocked with a warning toast instead of a duplicate.
3. **Full stack management** — remove a single item with its ✕ button or clear everything at once with "Remove All," each backed by its own toast, with a clear empty state when nothing is selected yet.

## 🚀 Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

To build for production:

```bash
npm run build
npm run preview
```

## 📁 Project structure

```
dev-stack/
├── public/
│   └── technologies.json     # technology data, fetched at runtime
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TechnologyGrid.jsx
│   │   ├── TechCard.jsx
│   │   ├── YourStack.jsx
│   │   ├── Footer.jsx
│   │   └── Loader.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── index.html
```

---

## 📚 React questions

**What is JSX, and why is it used in React?**
JSX is a syntax extension that lets you write HTML-like markup directly inside JavaScript. Under the hood it compiles down to `React.createElement()` calls. It's used because it makes component structure easy to read and write — you can see what the UI will look like right next to the logic that drives it, instead of building elements by hand in plain JS.

**What is the difference between props and state?**
Props are data passed *into* a component from its parent — they're read-only from the child's point of view, and the child can't change them. State is data a component *owns and manages itself* — it can change over time (usually in response to user actions) and triggers a re-render when it does. In short: props flow down and are external, state is internal and mutable.

**What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a functional component hold and update its own local data. Calling it gives back the current value and a setter function; calling the setter schedules a re-render with the new value. In this project it's used in `App.jsx` to store the fetched `technologies` list, the `loading` flag, and the `stack` array of selected technologies, and in `Navbar.jsx` to track whether the mobile menu is open.

**What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects — code that reaches outside of rendering, like fetching data, subscriptions, or timers — after a component renders, and can re-run when its dependency list changes. Fetching `technologies.json` is a side effect (it talks to the network/filesystem), so it can't happen directly in the render body. `useEffect` with an empty dependency array runs the fetch exactly once when `App` first mounts, and the code sets `loading` back to `false` once the data (or an error) arrives.

**Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to match list items between renders so it knows which ones were added, removed, or reordered, instead of re-rendering the whole list from scratch. Without a stable, unique key, React can mix up which DOM node belongs to which data item, leading to wrong UI state (or a console warning). In this project, technology `id` values and stack item `id`s are used as keys since they're unique per item.

**What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI depending on some condition, using normal JavaScript (ternaries, `&&`, early returns) inside JSX rather than a separate templating syntax. One example is in `YourStack.jsx`: `{count === 0 ? <emptyMessage /> : <ul>...</ul>}` — it shows a "nothing here yet" message when the stack is empty, and the actual list of selected technologies otherwise. Another is in `TechnologyGrid.jsx`, which renders a `<Loader />` while `loading` is `true` and the grid of cards once it's `false`.

**How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child as **props** — attributes on the JSX tag, e.g. `<TechCard tech={tech} isAdded={...} />`. To send something back up, the parent passes a **callback function** down as a prop, and the child calls that function (usually with some data as an argument) when something happens. For example, `App.jsx` passes `onAdd={handleAdd}` down to `TechnologyGrid` → `TechCard`, and when the button is clicked, `TechCard` calls `onAdd(tech)`, which runs `handleAdd` back in `App` and updates the stack state there.
