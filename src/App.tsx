import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardContainer from './components/CardContainer'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='flex md:w-96 overflow-x-scroll'>
      <CardContainer title='Blog'>
        <p className=' text-lg text-red-500 bg-slate-600 mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsa nulla nihil, rerum accusamus cupiditate provident temporibus? Ad possimus eveniet iusto voluptates laborum non assumenda quis, iure quod voluptatem! Quasi!</p>
        <p className=' text-lg text-red-500 bg-slate-600 mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsa nulla nihil, rerum accusamus cupiditate provident temporibus? Ad possimus eveniet iusto voluptates laborum non assumenda quis, iure quod voluptatem! Quasi!</p>
        <p className=' text-lg text-red-500 bg-slate-600 mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsa nulla nihil, rerum accusamus cupiditate provident temporibus? Ad possimus eveniet iusto voluptates laborum non assumenda quis, iure quod voluptatem! Quasi!</p>
        <p className=' text-lg text-red-500 bg-slate-600 mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsa nulla nihil, rerum accusamus cupiditate provident temporibus? Ad possimus eveniet iusto voluptates laborum non assumenda quis, iure quod voluptatem! Quasi!</p>
        <p className=' text-lg text-red-500 bg-slate-600 mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsa nulla nihil, rerum accusamus cupiditate provident temporibus? Ad possimus eveniet iusto voluptates laborum non assumenda quis, iure quod voluptatem! Quasi!</p>
        <p className=' text-lg text-red-500 bg-slate-600 mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsa nulla nihil, rerum accusamus cupiditate provident temporibus? Ad possimus eveniet iusto voluptates laborum non assumenda quis, iure quod voluptatem! Quasi!</p>
        <p className=' text-lg text-red-500 bg-slate-600 mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsa nulla nihil, rerum accusamus cupiditate provident temporibus? Ad possimus eveniet iusto voluptates laborum non assumenda quis, iure quod voluptatem! Quasi!</p>
        <p className=' text-lg text-red-500 bg-slate-600 mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsa nulla nihil, rerum accusamus cupiditate provident temporibus? Ad possimus eveniet iusto voluptates laborum non assumenda quis, iure quod voluptatem! Quasi!</p>
      </CardContainer>
    </div>
  );
}

export default App;
