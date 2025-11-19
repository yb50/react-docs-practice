import './App.css'
import List from './(1)-quick-start/List';
import PackingList from './(1)-quick-start/PackingList';
import Profile from './(1)-quick-start/Profile';
import TodoList from './(1)-quick-start/TodoList';
import TodoList2 from './(1)-quick-start/TodoList2';
import TodoList3 from './(1)-quick-start/TodoList3';
import Gallery from './(2)-your-first-component/Profile2';

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
      <Gallery />
    </section>
  );
}
