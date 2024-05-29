import styles from "./page.module.css";
import Menu from '@/components/Menu';

export default function Home() {

  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <h1 style={{ fontSize: "3.5rem", paddingBottom: "10px" }} className="titulo" >Cuaderno</h1>
      </div>
      <div style={{
        height: 2, width: "90%", backgroundColor: "white", borderRadius: "100%"
      }} className="linea" >
      </div>
      <Menu />
    </main>
  );
}
