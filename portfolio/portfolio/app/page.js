import Image from "next/image";
import img from '../public/next.svg'
import styles from "./page.module.css";
import Contact from "./contact/page";
import About from "./about/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Nombre completo</h1>
      <h2>Full Stack developer</h2>
      <Image src={img} width='400' height='400' className={styles.img}/>
      <p>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem? lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
      </p>
      <About />
      <Contact />
    </main>
  );
}
