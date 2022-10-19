import Header from '../components/header'
import Meio from '../components/meio'
import Solucao from '../components/solucao'
import CF from '../components/como-funciona'
import Footer from '../components/footer'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title> Takout </title>
      </Head>
        <Header></Header>
        <Meio></Meio>
        <Solucao></Solucao>
        <CF></CF>
        <Footer></Footer>
    </div>
  )
}
