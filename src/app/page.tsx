import styles from './page.module.css'
import Slider from "@/app/components/Slider/Slider";
import GMap from "@/app/components/Map/GMap";


export default function Home() {

  return (
    <main className={styles.main}>
        <Slider />
        <GMap />
    </main>
  )
}
