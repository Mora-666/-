
import styles from './user.css';

export default function(props) {
  return (
    <div className={styles.normal}>
      <h1>Page user</h1>
      <h2>{props.location.state.id}</h2>
    </div>
  );
}
