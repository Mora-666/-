
import styles from './detail.css';
import Link from "umi/link"
export default function(props) {
  return (
      <div className={styles.normal}>
          
          <h1>公共组件</h1>    
          <Link to="/detail/detail">子组件</Link>
          {props.children}
    </div>
  );
}