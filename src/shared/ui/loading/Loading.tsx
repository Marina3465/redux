import { BeatLoading } from "respinner";
import styles from "./loading.module.scss";

export function Loading() {
  return (
    <div className={styles.container}>
      <BeatLoading fill="white" />
    </div>
  );
}
