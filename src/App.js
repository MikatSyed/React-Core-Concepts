import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Tom', 'Alex', 'Mafin', 'Alison', 'Beker', 'jameson'];
  const products = [
    { name: 'Photoshop', price: '$60.23' },
    { name: 'Illustrator', price: '$40.73' },
    { name: 'PDF Reader', price: '$20.23' }
  ]
  // const productsNames = products.map(product => product);
  // console.log(productsNames);
  // const nayokNames = nayoks.map(nayok => nayok);
  // console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter />
        <Users />
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(pd => <li>{pd.name}</li>)
          }

        </ul>
        {
          products.map(pd => <Product product={pd} />)
        }
      </header>
    </div>
  );
}



const Product = (props) => {
  const { name, price } = props.product;
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightblue',
    height: '200px',
    width: '300px',
    float: 'left',

  }
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Buy Now</button>
    </div>
  );
};


function Counter() {
  const [count, setCount] = useState(0)
  // const handleIncrease = () => setCount(count + 1);


  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
