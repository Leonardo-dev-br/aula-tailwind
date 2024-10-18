import Image from 'next/image'
import { Header } from './components/header/Header'

export default function Home() {
  return (
    <>
      <main>
        <Header />
      </main>
      <section className="conatiner mx-auto">
        <div className="flex">
          <article className="w-1/3">1</article>
          <article className="w-1/3">2</article>
          <article className="w-1/3">3</article>
        </div>
        <div className="flex">
          <article className="w-1/3">4</article>
          <article className="w-1/3">5</article>
          <article className="w-1/3">6</article>
        </div>
      </section>
    </>
  )
}
