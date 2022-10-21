import React from 'react';
import styles from '../../styles/Home.module.css';

type CardProps = {
  title : string,
  content : string,
  link ?: string,
}

export default function Card(props:CardProps) {
  return (
    <a href={props.link} className={styles.card}>
      <h2>{props.title}  &rarr;</h2>
      <p>{props.content}</p>
    </a>
  )
}
