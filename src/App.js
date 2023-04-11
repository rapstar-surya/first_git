import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import PostsTable from './components/PostsTable/PostsTable';
import Boxes from './components/Boxes/Boxes';


function App() {
  return (
    <Fragment>
      {/* <PostsTable/> */}

      <Boxes/>
    </Fragment>
  );
}

export default App;
