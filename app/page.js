import styles from "./page.module.css";
import BBC from "../bbcObject.json";

export default function Home() {
  const objectItem = Object.values(BBC.event).flat();
  console.log(objectItem);

  return (
    <div className={styles.page}>
      <p>Test</p>
      {Object.values(BBC.event).map(({ title, speakers }) => {
        const [{ fName, lName }] = speakers;

        return (
          <>
            <h3>{title}</h3>
            <p>
              {fName} {lName}
            </p>
          </>
        );
      })}
    </div>
  );
}
