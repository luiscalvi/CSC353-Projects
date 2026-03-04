import { useState } from 'react'
import sad from './assets/sad.png'
import calm from './assets/calm.webp'
import happy from './assets/happy.png'
import anxious from './assets/anxious.png'
import mad from './assets/mad.png'

import './emotion.css'

function Emotion() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((c) => (c < 5 ? c + 1 : 5));
  }
  function reset() {
    setCount(0);
  }

  return (
    <div className={`page bg-${count}`}>
      <h1>How are you feeling?</h1>

      <div className="row">
        <div className="emotion-item">
          <img src={sad} className="logo sad" />
          <p>1</p>
        </div>

        <div className="emotion-item">
          <img src={calm} className="logo calm" />
          <p>2</p>
        </div>

        <div className="emotion-item">
          <img src={happy} className="logo happy" />
          <p>3</p>
        </div>

        <div className="emotion-item">
          <img src={anxious} className="logo anxious" />
          <p>4</p>
        </div>

        <div className="emotion-item">
          <img src={mad} className="logo mad" />
          <p>5</p>
        </div>
      </div>

      <div className="controls">
        <button onClick={increase} disabled={count === 5}>
          You are at a {count}
        </button>

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Emotion;
