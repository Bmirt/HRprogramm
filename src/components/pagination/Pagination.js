import React from "react";
import _ from "lodash";
import styles from "./pagination.module.css";

const Pagination = props => {
  const { itemsCount, pageSize } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pageCount + 1);
  if (pageCount === 1) return null;
  return (
    <nav>
      <ul className={styles.pagination}>
        {pages.map(page => (
          <li
            key={page}
            className={
              page === props.currentPage
                ? `${styles.list_item} ${styles.active}`
                : styles.list_item
            }
          >
            <span
              className={styles.page_link}
              onClick={() => props.onPageChange(page)}
            >
              {page}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
