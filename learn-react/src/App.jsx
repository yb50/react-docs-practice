import './App.css'
import List from './(1)-quick-start/List';
import PackingList from './(1)-quick-start/PackingList';
import Profile from './(1)-quick-start/Profile';
import TodoList from './(1)-quick-start/TodoList';
import TodoList2 from './(1)-quick-start/TodoList2';
import TodoList3 from './(1)-quick-start/TodoList3';
import Gallery from './(2)-describing-the-ui/(1)-your-first-component/Profile2';
import Test from './(2)-describing-the-ui/(5)-passing-props-to-a-component/(3)-my-playground/Test';
import PackingList2 from './(2)-describing-the-ui/(6)-conditional-rendering/App';
import AddingInteractivity from './(3)-adding-interactivity/(1)-adding-interactivity/(1)-AddingInteractivity1';
import AddingInteractivity2 from './(3)-adding-interactivity/(1)-adding-interactivity/(2)-AddingInteractivity2/AddingInteractivity2';
import AddingInteractivity3 from './(3)-adding-interactivity/(1)-adding-interactivity/(3)-AddingInteractivity3';
import AddingInteractivity4 from './(3)-adding-interactivity/(1)-adding-interactivity/(4)-AddingInteractivity4';
import AddingInteractivity5 from './(3)-adding-interactivity/(1)-adding-interactivity/(5)-AddingInteractivity5';
import AddingInteractivity6 from './(3)-adding-interactivity/(1)-adding-interactivity/(6)-AddingInteractivity6';

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
      <Test />
      <PackingList2 />
      <AddingInteractivity />
      <AddingInteractivity2 />
      <AddingInteractivity3 />
      <AddingInteractivity4 />
      <AddingInteractivity5 />
      <AddingInteractivity6 />
    </section>
  );
}
