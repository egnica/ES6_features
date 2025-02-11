import styles from "./page.module.css";
import BBC from "../bbcObject.json";
import Destructure from "./lessons/destructure.jsx";
import Methods from "./lessons/objArrayMethods.jsx";
export default function Home() {
  return (
    <div className={styles.page}>
      <p>Main page</p>
      {/* <Destructure /> */}
      <Methods />
    </div>
  );
}
