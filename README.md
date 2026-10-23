Dev Stack

A small React app where you browse popular technologies and build your own development stack.

Description

Dev Stack loads a list of technologies from a JSON file and shows them as cards. You can add technologies to a "Your Stack" panel, remove them one by one, or clear the whole stack. Toast messages tell you what happened after every action.

Technologies Used

- React.js (Vite)
- Tailwind CSS + DaisyUI
- JavaScript (ES6+)
- React-Toastify
- JSON

Features

1. Build your stack – add technologies, no duplicates, remove one or remove all, with toast alerts.
2. Fully responsive– sticky navbar with mobile hamburger menu, 1 / 2 / 3 column card grid.
3. Gradient brand theme – one CSS variable controls the whole theme.

Run Locally
bash

npm install
npm run dev

React Questions

1. What is JSX, and why is it used in React?
   JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes UI code easier to read and write, and Babel/Vite turns it into normal JavaScript.

2. What is the difference between props and state?
   Props are data passed from a parent to a child and are read-only. State is data owned by a component that can change over time and re-renders the component when it does.

3. What does useState do, and where did I use it?
   useState lets a component remember a value between renders. I used it in `App.jsx` for `technologies`, `loading`, and `stack`.

4. What does useEffect do, and why was it needed to load the JSON?
   `useEffect` runs code after the component renders. I used it with an empty dependency array so the JSON is fetched once on page load, instead of on every render.

5. Why does every item in a.map() list need a unique key?
   React uses the key to know which item is which when the list changes, so it can update, add, or remove only the right items efficiently and correctly.

6. What is conditional rendering?
   Showing different UI depending on a condition. In YourStack.jsx I show an "empty stack" message when `stack.length === 0`, otherwise the list of selected technologies.

7. How do you pass data from parent to child, and back?
   The parent passes data through props (e.g. <TechCard tech={tech} />). The child sends something back by calling a function the parent passed as a prop (e.g. `onAdd(tech)`), which updates the parent's state.
