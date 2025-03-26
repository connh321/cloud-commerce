import { LuMenu } from "react-icons/lu";
import styles from './HeaderBottom.module.scss';

const menuItems = [
  { icon: <LuMenu />, text: 'All' },
  { text: 'Big Sale' },
  { text: 'Medical Care' },
  { text: 'Best Sellers' },
  { text: 'Music' },
  { text: 'Basics' },
  { text: 'New Releases' },
  { text: 'Electronics' },
  { text: 'Home & Kitchen' },
  { text: 'Customer Service' },
];

const HeaderBottom = () => (
  <div className={styles.headerBottom}>
    {menuItems.map((item, index) => (
      <li key={index} className={styles.menuItem}>
        {item.icon && item.icon}
        {item.text}
      </li>
    ))}
  </div>
);

export default HeaderBottom;