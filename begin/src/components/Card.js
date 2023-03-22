import React from 'react'
import styles from './Card.module.css'
import Button from './Button'
import Input from './Input'

const Card = ({ count, discount, name, price, handlerMinus, handlerPlus, handlerChangeName, handlerChangePrice, handlerAddProduct }) => {
  return (
    <div className={styles.container}>
       <div className={styles.name}>{name}</div>
      <div className={styles.counter}>
        <Button label='➖' onClick={handlerMinus} />
        <span className={styles.count}>{count}</span>
        <Button label='➕' onClick={handlerPlus} />
      </div>
      <div className={styles.price}>{`$ ${price}`} each</div>
      <div className={styles.discount}>{`Discount: ${discount}%`}</div>
      <div className={styles.form}>
        <Input value={name} label='Product Name' onChange={handlerChangeName} />
        <Input value={price} label='Price' onChange={handlerChangePrice} />
      </div>
      <Button label='Add Product' onClick={handlerAddProduct} />
    </div>
  )
}

export default Card
