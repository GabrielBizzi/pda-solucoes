import React, { useCallback, useEffect, useState } from 'react';
import ReactSelect, {
  GroupedOptionsType,
  OptionsType,
  OptionTypeBase,
  ValueType,
} from 'react-select';

import { ThemeContext } from 'styled-components';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import DoubleArrowRight from '../../../assets/svg/double-arrow-right.svg';

import { Container, ButtonLink, SelectContainer } from './styles';

interface IPaginationProps {
  count: number;
  defaultNumberOfRows: number | string;
  onChangeRowsPerPage?: (number: number) => void;
  rowsPerPage: number;
  options?:
    | GroupedOptionsType<OptionTypeBase>
    | OptionsType<OptionTypeBase>
    | undefined;
  page: number;
  onChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => void;
}

const PaginationComponent: React.FC<IPaginationProps> = ({
  count,
  onChangePage,
  rowsPerPage,
  onChangeRowsPerPage,
  options,
  defaultNumberOfRows,
  page,
}) => {
  const [pages, setPages] = useState<Array<number>>([]);
  const { colors } = React.useContext(ThemeContext);

  const calcPagesRange = useCallback(
    inheritedPage => {
      const numberOfPages = Math.ceil(count / rowsPerPage);
      const numberOfItems = numberOfPages <= 5 ? numberOfPages : 5;
      const newPivotPage = inheritedPage >= 0 ? inheritedPage + 1 : 1;
      const limit =
        numberOfPages - newPivotPage < 2
          ? numberOfItems / 2 + 2 + newPivotPage - numberOfPages
          : numberOfItems / 2;

      const sum = Math.floor(
        1 +
          (newPivotPage > 3 && newPivotPage > numberOfItems - 2
            ? newPivotPage - limit
            : 0)
      );

      return [...Array(numberOfItems).keys()].map(key => key + sum);
    },
    [count, rowsPerPage]
  );

  const skip = useCallback(
    (event, inheritedPage) => {
      const numberOfPages = Math.ceil(count / rowsPerPage);

      let newPage = inheritedPage;
      if (newPage > numberOfPages - 1) {
        newPage = numberOfPages - 1;
      }
      if (newPage < 0) {
        newPage = 0;
      }
      onChangePage(event, newPage);
      setPages(calcPagesRange(newPage));
    },
    [calcPagesRange, onChangePage, count, rowsPerPage]
  );

  useEffect(() => {
    const calcPages = calcPagesRange(page);
    setPages(calcPages);
  }, [calcPagesRange, page]);

  const customStyles = {
    placeholder: (provided: object) => ({
      ...provided,
      fontSize: '13px',
      lineHeight: '45px',
      fontWeight: 400,
      color: '#b5b5c3',
    }),
  };

  return (
    <Container>
      <div className="pagination">
        <button
          type="button"
          className="double-arrow arrow"
          onClick={event => skip(event, page - 5)}
          disabled={page <= 0}
        >
          <img src={DoubleArrowRight} alt="" />
        </button>
        <button
          type="button"
          className="arrow"
          onClick={event => skip(event, page - 1)}
          disabled={page <= 0}
        >
          <MdKeyboardArrowLeft size={20} color={`${colors.arrow}`} />
        </button>
        <div className="links">
          {pages.map(page_ => (
            <ButtonLink
              onClick={event => skip(event, page_ - 1)}
              key={page_}
              type="button"
              active={page + 1 === page_}
            >
              {page_}
            </ButtonLink>
          ))}
        </div>
        <button
          type="button"
          disabled={page + 1 >= Math.ceil(count / rowsPerPage)}
          className="arrow"
          onClick={event => skip(event, page + 1)}
        >
          <MdKeyboardArrowRight size={20} color={`${colors.arrow}`} />
        </button>
        <button
          disabled={page + 1 >= Math.ceil(count / rowsPerPage)}
          type="button"
          className="double-arrow arrow"
          onClick={event => skip(event, page + 5)}
        >
          <img src={DoubleArrowRight} alt="" />
        </button>
      </div>
      <div className="pages">
        <div className="select">
          <SelectContainer>
            <ReactSelect
              classNamePrefix="sel"
              name="quantity"
              styles={customStyles}
              placeholder=""
              defaultValue={{
                label: defaultNumberOfRows,
                value: defaultNumberOfRows,
              }}
              onChange={(value: ValueType<OptionTypeBase, false>) => {
                if (onChangeRowsPerPage) onChangeRowsPerPage(value?.value);
              }}
              options={
                options || [
                  {
                    label: 3,
                    value: 3,
                  },
                  {
                    label: 5,
                    value: 5,
                  },
                  {
                    label: 10,
                    value: 10,
                  },
                ]
              }
            />
          </SelectContainer>
        </div>
        <div className="text">
          <p>
            {`Registros ${page * rowsPerPage + 1} a ${
              // (page + 1) * rowsPerPage
              ([...Array(count).keys()]
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .pop() || 0) + 1
            } total ${count}`}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default PaginationComponent;
