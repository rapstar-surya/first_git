import React from 'react'
import styles from './App.module.css'
import { useNavigate } from 'react-router-dom'

export default function App() {
  const Navigate = useNavigate();

  return (
    <>
    <div>
      <header className={styles.headers}>
        <span onClick={()=>Navigate('/create')} className={styles.first}>Create Note</span>
        <span onClick={()=>Navigate('/edit')} className={styles.first}>Edit Note</span>
        <span onClick={()=>Navigate('/delete')} className={styles.first}>Delete Note</span>
      </header>
      <hr />
    </div>
    <div>
      <h1 style={{textAlign:'center'}}>This is main page</h1>
      <p>Click on above text to redirect on those Pages</p>
    </div>
    </>
  )
}
