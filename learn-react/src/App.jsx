import './App.css'
import List from './List';
import PackingList from './PackingList';
import Profile from './Profile';
import TodoList from './TodoList';
import TodoList2 from './TodoList2';
import TodoList3 from './TodoList3';

export default function App() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <TodoList />
      <TodoList2 />
      <TodoList3 />
      <PackingList />
      <List />
    </section>
  );
}
