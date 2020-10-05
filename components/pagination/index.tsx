import React from 'react';
import cs from 'classnames';
import { IPagination } from '@models/pagination';
import s from './styles.module.scss';

interface IProps {
  data: Partial<IPagination>;
  onChange: (page: number) => void;
  length?: number;
}

const Pagination: React.FC<IProps> = ({ data, onChange }): React.ReactElement => {
  console.warn('data', data);
  const { currentPage, totalItems } = data;

  if (!totalItems) {
    return <></>;
  }

  const pageSize: number = 10;
  const maxPages: number = 10;
  let current_page = currentPage;
  const totalPages = Math.ceil(totalItems / pageSize);
  const isLast = currentPage === totalPages;
  const isFirst = currentPage === 1;
  if (currentPage < 1) {
    current_page = 1;
  } else if (currentPage > totalPages) {
    current_page = totalPages;
  }

  let startPage: number;
  let endPage: number;
  if (totalPages <= maxPages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
    if (current_page <= maxPagesBeforeCurrentPage) {
      startPage = 1;
      endPage = maxPages;
    } else if (current_page + maxPagesAfterCurrentPage >= totalPages) {
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    } else {
      startPage = current_page - maxPagesBeforeCurrentPage;
      endPage = current_page + maxPagesAfterCurrentPage;
    }
  }
  const startIndex = (current_page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  const pages = Array.from(Array(endPage + 1 - startPage).keys()).map((i) => startPage + i);
  return (
    <div className={s.custom_pagination}>
      <button
        type="button"
        className={cs(s.arrow_btn, s.prev, isFirst && s.disabled)}
        disabled={isFirst}
        onClick={() => {
          onChange(currentPage - 1);
        }}
      >
        <i className="icon-Right icon" />
      </button>
      {pages.map((item) => {
        return (
          <button
            key={item}
            type="button"
            onClick={() => {
              currentPage !== item && onChange(item);
            }}
            className={cs(s.item, currentPage === item && s.active)}
          >
            {item}
          </button>
        );
      })}
      <button
        type="button"
        className={cs(s.arrow_btn, s.next, isLast && s.disabled)}
        disabled={isLast}
        onClick={() => {
          onChange(currentPage + 1);
        }}
      >
        <i className="icon-Left icon" />
      </button>
    </div>
  );
};

export default Pagination;
