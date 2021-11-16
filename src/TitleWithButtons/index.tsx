/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import { IoArrowBackOutline } from 'react-icons/io5';
import { FaWindowClose } from 'react-icons/fa';

import { Container } from './styles';

interface TitleWithButtonsProps {
  title: string;
  back?: boolean;
  password?: boolean;
  reset?: boolean;
  save?: boolean;
  filter?: boolean;
  filterTitle?: string;
  filterContent?(): React.ReactNode;
  handleSave?(): void;
  handleBack?(): void;
  handleResetPassword?(): void;
  handleReset?(): void;
}

const TitleWithButtons: React.FC<TitleWithButtonsProps> = ({
  children,
  title,
  back,
  password,
  reset,
  save,
  filter,
  filterContent,
  filterTitle,
  handleBack,
  handleSave,
  handleResetPassword,
  handleReset,
}) => {
  const [filterActive, setFilterActive] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const handleClickFilterActions = useCallback(() => {
    setFilterActive(!filterActive);
  }, [filterActive]);

  const handleClickOutside = (e: any) => {
    if (filterRef?.current?.contains(e.target)) {
      return;
    }

    setFilterActive(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <h1>{title}</h1>
      <div className="buttons">
        {filter && (
          <div className="filter-row" ref={filterRef}>
            <div
              className="filter filter-id filterBtn"
              onClick={handleClickFilterActions}
            >
              <div className="icon filter-id">
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="16" height="2" rx="1" fill="#CBCBCB" />
                  <rect
                    x="3"
                    y="4"
                    width="10"
                    height="2"
                    rx="1"
                    fill="#CBCBCB"
                  />
                  <rect
                    x="6"
                    y="8"
                    width="4"
                    height="2"
                    rx="1"
                    fill="#CBCBCB"
                  />
                </svg>
              </div>
              <p className="text filter-id">Filtro</p>
            </div>
            <div
              id="filterBox"
              className={`filter-box ${filterActive ? 'active' : ''}`}
            >
              <div className="filter-header">
                <h1>{filterTitle}</h1>
                <div className="close" onClick={() => setFilterActive(false)}>
                  <FaWindowClose size={20} color="#ccc" />
                </div>
              </div>
              <div className="filter-content">
                {filterContent && filterContent()}
              </div>
            </div>
          </div>
        )}

        {back && (
          <button type="button" className="back" onClick={handleBack}>
            <div className="icon">
              <IoArrowBackOutline size={16} color="#7E8299" />
            </div>
            <p className="text">Voltar</p>
          </button>
        )}

        {password && (
          <button
            type="button"
            className="password"
            onClick={handleResetPassword}
          >
            <p className="text">Redefinir Senha</p>
          </button>
        )}

        {reset && (
          <button type="button" className="reset" onClick={handleReset}>
            <div className="icon">
              <AiOutlineReload size={16} color="#7E8299" />
            </div>
            <p className="text">Reset</p>
          </button>
        )}

        {save && (
          <button type="button" className="save" onClick={handleSave}>
            <p className="text">Save</p>
          </button>
        )}

        {children}
      </div>
    </Container>
  );
};

export default React.memo(TitleWithButtons);
