import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Meio from '../components/meio'
import Solucao from '../components/solucao'
import CF from '../components/como-funciona'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
        <Header></Header>
        <Meio></Meio>
        <Solucao></Solucao>
        <CF></CF>
    </div>
  )
}
