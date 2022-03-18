import React, { useState, useEffect } from "react";

const CounterA = React.memo(({count}) => {

  useEffect(()=>{
    console.log(`CounterA Update - count : ${count}`)
  })

  return <div>{count}</div>;
});

const CounterB = ({obj}) => {
  return <div>{obj.count}</div>
};

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1
  });

  return (
  <div style= {{padding : 50}}>
    <div>
      <h2>Counter A</h2>
      <CounterA count={count}/>
      <button onClick={()=>setCount(count)}>A button</button>
    </div>
    <div>
      <h2>Counter B</h2>
      <CounterB obj={obj}/>
      <button onClick={()=>setObj({
        count: obj.count
      })}>B Button</button>
    </div>
  </div>
  );
};

export default OptimizeTest;