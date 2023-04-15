import styles from './App.module.css';
import Logo from './logo.svg'


const App = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={Logo} fetchpriority='high' />
      </header>
    </div>
  );
};

export default App;
