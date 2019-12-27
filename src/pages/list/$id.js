
import styles from './list.css';

export default function(props) {
  return (
    <div className={styles.normal}>
      <h1>Page list</h1>
      <h4>{props.match.params.id}</h4>
    </div>
  );
}
