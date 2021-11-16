import React, { useCallback, useEffect, useState, memo } from 'react';
import { Form } from '@unform/web';
import { useLocation } from 'react-router-dom';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import Select from '../Form/Select';

import DoubleArrowRight from '../assets/svg/double-arrow-right.svg';

import { Container, ButtonLink } from './styles';

interface PagesFilter {
  inheritedPage: number;
}

interface PaginationProps {
  setNumberOfItens?(number: number): void;
  totalItens?: number;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  setNumberOfItens,
  totalItens,
}) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const { pathname: url } = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [fakeCurrentPage, setFakeCurrentPage] = useState(currentPage);
  const [numberOfItens, setNumberofItensInPagination] = useState(10);
  const [totalPages] = useState(() => {
    if (totalItens) {
      const total = Math.ceil(totalItens / numberOfItens);
      return total;
    }

    return 0;
  });
  const [pages, setPages] = useState([] as number[]);
  const query = useQuery();
  const [render, setRender] = useState(true);

  const pagesFilter = useCallback(
    ({ inheritedPage }: PagesFilter) => {
      const pagesList = [];

      for (let pageIndex = 1; pageIndex <= totalPages; pageIndex += 1) {
        pagesList.push(pageIndex);
      }

      if (inheritedPage < 3) {
        return pagesList.filter(
          (page: number) =>
            page <= inheritedPage + (5 - inheritedPage) &&
            page >= inheritedPage - (inheritedPage + 5)
        );
      }

      if (inheritedPage > totalPages - 3) {
        return pagesList.filter(
          (page: number) => page <= totalPages && page > totalPages - 5
        );
      }

      return pagesList.filter(
        (page: number) => page <= inheritedPage + 2 && page >= inheritedPage - 2
      );
    },
    [totalPages]
  );

  useEffect(() => {
    if (!totalItens || totalItens <= numberOfItens) {
      setRender(false);
    }
  }, [numberOfItens, totalItens]);

  useEffect(() => {
    const newPagesFiltered = pagesFilter({
      inheritedPage: currentPage,
    });

    setPages([...newPagesFiltered]);
  }, [pagesFilter, totalPages, currentPage]);

  useEffect(() => {
    const newPagesFiltered = pagesFilter({
      inheritedPage: fakeCurrentPage,
    });

    setPages([...newPagesFiltered]);
  }, [fakeCurrentPage, setPages, pagesFilter]);

  useEffect(() => {
    const page = Number(query.get('page')) || 1;

    setCurrentPage(page);
  }, [query]);

  const skipRight = useCallback(
    number => {
      if (totalPages < fakeCurrentPage) {
        return;
      }

      const math = fakeCurrentPage + number;
      const page = math > totalPages ? totalPages : math;
      setFakeCurrentPage(page);
    },
    [fakeCurrentPage, totalPages]
  );

  const skipLeft = useCallback(
    number => {
      if (fakeCurrentPage <= 0) {
        return;
      }

      const math = fakeCurrentPage - number;
      const page = math < 0 ? 1 : math;
      setFakeCurrentPage(page);
    },
    [fakeCurrentPage]
  );

  if (!render) {
    return <div />;
  }

  return (
    <Container>
      <div className="pagination">
        <button
          type="button"
          className="double-arrow arrow"
          onClick={() => skipLeft(10)}
        >
          <img src={DoubleArrowRight} alt="" />
        </button>
        <button type="button" className="arrow" onClick={() => skipLeft(5)}>
          <MdKeyboardArrowLeft size={20} color="#7E8299" />
        </button>
        <div className="links">
          {pages.length > 0 &&
            pages.map(page => (
              <ButtonLink
                to={`${url}?page=${page}`}
                key={page}
                type="button"
                className={`${currentPage === page && 'active'}`}
              >
                {page}
              </ButtonLink>
            ))}
        </div>
        <button type="button" className="arrow" onClick={() => skipRight(5)}>
          <MdKeyboardArrowRight size={20} color="#7E8299" />
        </button>
        <button
          type="button"
          className="double-arrow arrow"
          onClick={() => skipRight(10)}
        >
          <img src={DoubleArrowRight} alt="" />
        </button>
      </div>
      <Form onSubmit={() => false} className="pages">
        <div className="select">
          <Select
            placeholder=""
            name="quantity"
            hasChanged={(value: number) => {
              if (setNumberOfItens) setNumberOfItens(value);
              setNumberofItensInPagination(value);
            }}
            options={[
              {
                label: 10,
                value: 10,
              },
              {
                label: 20,
                value: 20,
              },
              {
                label: 30,
                value: 30,
              },
            ]}
            defaultValue={{
              label: 10,
              value: 10,
            }}
          />
        </div>

        <div className="text">
          <p>
            {`Registros ${
              currentPage === 1
                ? currentPage
                : currentPage * numberOfItens - numberOfItens
            } a ${currentPage * numberOfItens} total ${totalItens}`}
          </p>
        </div>
      </Form>
    </Container>
  );
};

export default memo(PaginationComponent);
