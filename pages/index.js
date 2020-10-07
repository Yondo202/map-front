import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import MainMap from '../components/MainMap'
import { motion } from 'framer-motion'


let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
  exit: { y: 200, transition: { duration: 0.9, ease: easing } },
  enter: {
    y: 0,
    transition: { delay: 0.2, duration: 0.9, ease: easing }
  }
};


export default function Home() {
  return (
    <div >
      <Head>
        <title>MapMN</title>
        <link rel="icon" href="/2.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"></link>
      </Head>

      <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
        <MainMap />
      </motion.div>

    </div>
  )
}
