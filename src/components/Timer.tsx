import { useTimer } from "react-timer-hook";
import styles from "../styles/components/Timer.module.css";

type Props = {};

export default function Timer({}: Props) {
  const now = new Date();
  now.setSeconds(now.getSeconds() + 600);
  const { seconds, minutes, hours, days, start } = useTimer({
    expiryTimestamp: now,
    autoStart: false,
  });

  return (
    <div className={styles.host}>
      <h2>Timer</h2>
      <div>
        <span>{days}</span>
        {" : "}
        <span>{hours}</span>
        {" : "}
        <span>{minutes}</span>
        {" : "}
        <span>{seconds}</span>
      </div>
      <button onClick={start}>Start</button>
    </div>
  );
}