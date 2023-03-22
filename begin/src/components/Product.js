import styles from './Product.module.css'
import ViewList from './ViewList';
import { useState, useEffect } from 'react';
import Card from './Card';

function Product() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState('Banana');
  const [price, setPrice] = useState(2.99);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  
  
  const handlerPlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };
  const handlerMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      if (count < 0) return 0;
      return count;
    });
  };

  const handlerChangeName = (value) => {
    setName(value);
  };
  const handlerChangePrice = (value) => {
    setPrice(value);
  };
  const handlerAddProduct = () => {
    console.log('handlerAddProduct');
    const newItem = {
      name: name,
      price: price,
      count: count,
      discount: discount,
    };
    const newList = [...list, newItem];
    setList(newList);
  }


  const handlerTotal = () => {
    let total = 0;
    list.forEach((item) => {
      total += item.price * item.count * (1 - item.discount / 100);
    });
    setTotal(total);
  };

  useEffect(() => {
    handlerTotal();
  }, [list]);

  return (
    <div className={styles.Product}>
      <Card 
        count={count}
        discount={discount}
        name={name}
        price={price}
        handlerMinus={handlerMinus}
        handlerPlus={handlerPlus}
        handlerChangeName={handlerChangeName}
        handlerChangePrice={handlerChangePrice}
        handlerAddProduct={handlerAddProduct}
       
      />
    <ViewList list={list}
    total={total} 
    />
   
    </div>
  );
}
export default Product;
