import logo from './logo.svg';
import topRight from './images/blobs.svg'
import leftBottom from './images/blob5.svg'
import './App.css';
import FirstPage from './components/FirstPage';
import React from 'react';
import SecondPage from './components/SecondPage';

function App() {
  const [openSecondPage,setOpenSecondPage ] = React.useState(false)


  return (
    <div className="App">
      <img className='topRightImg' src={topRight} alt="" />
      <FirstPage className={openSecondPage?'displayNone':'displayFlex'} setOpenSecondPage={setOpenSecondPage}/>
      <SecondPage className={openSecondPage?'displayFlex':'displayNone'} />
      <img className='bottomLeftImg' src={leftBottom} alt="" />
    </div>
  );
}

export default App;
