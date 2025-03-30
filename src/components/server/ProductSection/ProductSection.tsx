"use server";
import styles from "./productSection.module.scss";

interface ProductSectionProps {
  cards: React.ReactNode[];
}

const ProductSection = ({ cards }: ProductSectionProps) => {
  return <div className={styles.productSection}>{cards}</div>;
};

export default ProductSection;
