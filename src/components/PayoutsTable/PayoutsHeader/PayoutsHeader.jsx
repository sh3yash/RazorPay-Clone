
import styles from "./PayoutsHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";

const PayoutsHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1>Payouts/</h1>
        <div className={styles.tabGroup}>
          <button className={`${styles.tab} ${styles.active}`}>Single</button>
          <button className={`${styles.tab} ${styles.new}`}>Bulk</button>
          <button className={styles.tab}>Tally</button>
          <button className={styles.tab}>Payout Links</button>
        </div>
      </div>
      <div className={styles.right}>
        <button className={styles.payoutButton}>+ PAYOUT</button>
        <button className={styles.iconButton}><FontAwesomeIcon icon={faSearch} /></button>
        <button className={styles.iconButton}><FontAwesomeIcon icon={faShoppingCart} /></button>
        <button className={styles.iconButton}><FontAwesomeIcon icon={faUser} /></button>

      </div>
    </header>
  );
};

export default PayoutsHeader;
