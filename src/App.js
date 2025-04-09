import logo from './logo.svg';
import Todofeature from './features/Todo/pages';
import Albumlist from './features/Album/pages';
import ColorBox from './features/Color/ColorBox';
import Counter from './features/Color/Counter';
import ListPage from './features/Todo/pages/listpages';
import DetailPage from './features/Todo/pages/detailPages';
import Notfound from './components/NotFound';
import productApi from './api/productApi';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import './index.css';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';

function App() {
  const name = 'John Doe';
  const age = 30;
  const ismale = true;
  const student = {
    name: 'Easy Frontend',
  };

  const colorList = ['red', 'green', 'blue'];

  useEffect(() => {
    const fetchProduct = async () => {
      const params = {
        limit: 10,
      };
      const productlist = await productApi.getAll(params);
      console.log(productlist);
    };
    fetchProduct();
  }, []);
  const color = 'green';

  //Style component
  const Title = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  `;

  //material styles
  const textProps = {
    variant: 'h5',
    align: 'center',
    fontWeight: 'bold',
  };

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Title>Hello World</Title>
        <Typography {...textProps}>
          Xin chào: {name} - {age} - {ismale ? 'male' : 'female'}
        </Typography>
        <ul>
          {colorList.map((color, index) => (
            <li key={index} style={{ color }}>
              {index + 1} - {color}
            </li>
          ))}
        </ul>
        {/* entry point */}
        <h1 className="header" style={{ color }}>
          header
        </h1>
        <div className="nav-container">
          {/* ({ isActive }): arrow fuc return classname based on isavtice */}
          <NavLink to="/todos" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Todos
          </NavLink>
          <NavLink to="/albums" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Albums
          </NavLink>
          <NavLink to="/colorbox" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Color Box
          </NavLink>
          <NavLink to="/counter" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Counter
          </NavLink>
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="/todos" replace />} />
          <Route path="/todos" element={<Todofeature />}>
            {/* render Todofeature + listpage  / index = path="" -> /todos*/}
            <Route index element={<ListPage />} />
            <Route path=":todoId" element={<DetailPage />} />
          </Route>
          <Route path="/albums" element={<Albumlist />} />
          <Route path="/colorbox" element={<ColorBox />} />
          <Route path="/counter" element={<Counter />} />

          <Route path="*" element={<Notfound />} />
        </Routes>

        <h1>footer</h1>
      </header>
    </div>
  );
}

export default App;
