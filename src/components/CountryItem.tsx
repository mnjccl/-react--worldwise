import styles from "../css/CountryItem.module.css";
import { CoutryItemProps } from "../types";

function CountryItem({ country }: CoutryItemProps) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
