import styles from './page.module.css'
import ServerInfo from "@/app/components/server-info";

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to the HNL DevSecOps Meetup
        </p>
      </div>
      <div>
        <ServerInfo />
      </div>
    </main>
  )
}
