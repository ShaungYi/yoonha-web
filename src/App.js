import logo from './logo.svg';
import './App.css';
import './global.css';

import QuestionCard from './Components/QuestionCard';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { classUpdateFunctionsSliceActions } from './store/store';

function App() {

  const [endCardClass, setEndCardClass] = useState('')
  const setEndCardClassApp = (endCardClass) => {
    setEndCardClass(endCardClass)
}

  const dispatch = useDispatch()
  dispatch(classUpdateFunctionsSliceActions.storeFuction({
    funcName: 'setEndCardClassApp',
    func: setEndCardClassApp
  }))


  return (
    <>
      {/* <header className={`${headerClass}`}>Yoonha Web</header> */}
      <div className={`App ${endCardClass}`}>
        <QuestionCard/>
      </div>
    </>
    
  );
}

export default App;
