import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Meio from '../components/meio'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <Header></Header>
        <Meio></Meio>
    </div>
  )
}
