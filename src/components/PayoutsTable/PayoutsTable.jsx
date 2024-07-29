
import SideHeader from "./SideHeader/SideHeader";
import PayoutsHeader from "./PayoutsHeader/PayoutsHeader";
import PayoutsFilters from "./PayoutsFilters/PayoutsFilters";
import PayoutsTableBody from "./PayoutsTableBody/PayoutsTableBody";
import styles from "./PayoutsTable.module.css";
// import Footer from "../Footer/Footer";


const PayoutsTable = () => {
  return (
    <div className={styles.appContainer}>
      <SideHeader />
      <main className={styles.mainContent}>
        <div className={styles.payoutsContainer}>
          <PayoutsHeader />
          <PayoutsFilters />
          <PayoutsTableBody />
        </div>
      </main>
      {/* <Footer/> */}
    </div>
  );
};

export default PayoutsTable;
