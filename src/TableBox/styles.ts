import styled, { css, keyframes } from 'styled-components';
import { darken } from 'polished';

export const ExportButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-size: 13px;
  text-transform: initial;
  margin-bottom: 1rem;

  & + button {
    margin-left: 6px;
  }

  .exportBtn {
    rect,
    path,
    svg {
      fill: #3699ff;
    }
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 7px;
    line-height: 18px;
    width: 100px;
    height: 35px;

    margin-top: 3px;
    background: transparent;
    color: #3699ff;
    font-size: 13px;
    text-transform: initial;

    transition: all 0.3s;
    &:hover {
      transition: background 0.2s;
      background: ${darken(0.05, '#3699FF')};
      color: #ffff;

      rect,
      path,
      svg {
        fill: #fff;
      }
    }

    & + button {
      margin-left: 6px;
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  /* padding: 0.9rem 1.3rem; */
  justify-content: flex-end;
  /* border-bottom: 0.5px solid ${props => props.theme.colors.line}; */
  margin-bottom: 0.4rem;
  .menuExport {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    text-transform: capitalize;
  }
`;

export const List = styled.div`
  background: ${props => props.theme.colors.input};
  border: 0.5px solid rgba(37, 75, 132, 0.25);
  border-radius: 5px;
`;

export const Container = styled.div`
  @media screen and (max-width: 1224px) {
    overflow-x: auto;
  }

  overflow-x: auto;

  .tableBoxId {
    tr {
      transition: background 0.3s ease;

      & + tr {
        td {
          padding: 16px;
          border: none;
        }
      }
    }
  }

  .table-box {
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse;

    thead,
    tbody {
      tr {
        white-space: nowrap;
        td,
        th {
          /*TODO: Ativar linhas nos títulos & + th {
            border-left: 1px solid ${props => props.theme.colors.line};
          } */
          padding: 12px 8px;
        }
      }
    }

    thead {
      text-align: left;

      tr {
        th {
          .title {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            min-width: max-content;

            button {
              display: flex;
              align-items: center;
              justify-content: space-between;
              background: none;
              box-shadow: none;
              color: inherit;
              border: none;
              padding: 0;
              font: inherit;
              outline: inherit;
              margin: 0;
              width: 100%;
            }

            h1 {
              font-size: 13px;
              line-height: 18px;
              color: ${props => props.theme.colors.title};
            }

            .icon {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-left: 8px;

              img {
                max-width: 100%;
              }
            }
          }
        }
      }
    }

    tbody {
      padding: 0 1rem;
      tr {
        &:hover {
          background: rgba(0, 0, 0, 0.05);
        }
        td {
          border-top: 1px solid ${props => props.theme.colors.line};

          & + td {
            border-left: 1px solid ${props => props.theme.colors.line};
          }
          padding: 7px 0;

          &:last-child {
            width: 10%;
          }

          .boolean-item {
            .yes,
            .no {
              width: 65px;
              height: 26px;
              background: ${props => props.theme.colors.success};
              border-radius: 6px;
              display: flex;
              align-items: center;
              justify-content: center;

              p {
                font-weight: 500;
                font-size: 11px;
                line-height: 16px;
                color: ${props => props.theme.colors.successText};
              }
            }

            .no {
              background: ${props => props.theme.colors.error};

              p {
                color: #ffa800;
              }
            }
          }

          .code-item {
            display: flex;
            align-items: center;

            p {
              font-weight: 600;
              font-size: 14px;
              line-height: 21px;
              color: #464e5f;
            }
          }

          .item {
            p {
              font-weight: 600;
              font-size: 13px;
              line-height: 19px;
              color: #b5b5c3;
            }
          }

          .detail {
            display: flex;
            justify-content: center;
          }

          .row-actions-item {
            display: flex;
            justify-content: flex-end;

            .action {
              width: 32px;
              height: 32px;
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: transparent;
              position: relative;

              .hover-item {
                display: none;
                position: absolute;
                bottom: 40px;
                background: #fff;
                padding: 8px 16px;
                border-radius: 4px;
                box-shadow: 1px 5px 14px 0px rgba(0, 0, 0, 0.1);
                -webkit-box-shadow: 1px 5px 14px 0px rgba(0, 0, 0, 0.1);
                -moz-box-shadow: 1px 5px 14px 0px rgba(0, 0, 0, 0.1);
                font-weight: 500;
                font-size: 13px;
                line-height: 19px;
                color: #1e1e2d;
                left: 50%;
                transform: translateX(-50%);
              }

              &:hover {
                transition: 0.5s;
                background: #f2f2f2;

                .hover-item {
                  display: block;
                }
              }

              & + .action {
                margin-left: 10px;
              }

              img {
                max-width: 50%;
                border-radius: 8px;
              }
            }
          }

          .row-actions-button-detail {
            display: flex;
            justify-content: flex-end;

            p {
              font-weight: 600;
              font-size: 14px;
              line-height: 21px;
            }

            .action {
              width: 32px;
              height: 32px;
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: transparent;
              position: relative;

              .hover-item {
                display: none;
                position: absolute;
                bottom: 40px;
                background: #fff;
                padding: 8px 16px;
                border-radius: 4px;
                box-shadow: 1px 5px 14px 0px rgba(0, 0, 0, 0.1);
                -webkit-box-shadow: 1px 5px 14px 0px rgba(0, 0, 0, 0.1);
                -moz-box-shadow: 1px 5px 14px 0px rgba(0, 0, 0, 0.1);
                font-weight: 500;
                font-size: 13px;
                line-height: 19px;
                color: #1e1e2d;
                left: 50%;
                transform: translateX(-50%);
              }

              &:hover {
                transition: 0.5s;
                background: #f2f2f2;

                .hover-item {
                  display: block;
                }
              }

              & + .action {
                margin-left: 10px;
              }

              img {
                max-width: 50%;
                border-radius: 8px;
              }
            }
          }

          .row-actions-button {
            display: flex;
            align-items: center;

            p {
              font-weight: 600;
              font-size: 14px;
              line-height: 21px;
            }

            .action {
              width: 32px;
              height: 32px;
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: transparent;
              position: relative;

              .hover-item {
                display: none;
                position: absolute;
                bottom: 40px;
                background: #fff;
                padding: 8px 16px;
                border-radius: 4px;
                box-shadow: 1px 5px 14px 0px rgba(0, 0, 0, 0.1);
                -webkit-box-shadow: 1px 5px 14px 0px rgba(0, 0, 0, 0.1);
                -moz-box-shadow: 1px 5px 14px 0px rgba(0, 0, 0, 0.1);
                font-weight: 500;
                font-size: 13px;
                line-height: 19px;
                color: #1e1e2d;
                left: 50%;
                transform: translateX(-50%);
              }

              &:hover {
                transition: 0.5s;
                background: #f2f2f2;

                .hover-item {
                  display: block;
                }
              }

              & + .action {
                margin-left: 10px;
              }

              img {
                max-width: 50%;
                border-radius: 8px;
              }
            }
          }
        }
      }
    }
  }
`;

export const SortButton = styled.button`
  background-color: inherit;
  justify-content: center;
  min-width: fit-content;
  align-content: flex-start;
  margin-left: 0 !important;
  img {
    margin-left: 8px;
    display: flex;
    justify-content: center;
    align-content: center;
  }
`;

interface CellContainerProps {
  boolean?: 'true' | 'false';
  stylePattern?:
    | 'currency'
    | 'number'
    | 'date'
    | 'datetime'
    | 'time'
    | 'string'
    | 'boolean'
    | 'datetime'
    | 'time';
}

export const CellContainer = styled.td<CellContainerProps>`
  max-width: 25%;
  min-width: 5%;
  width: 10%;

  div {
    p {
      font-family: 'Poppins', sans-serif;
      font-size: 13px;
      font-weight: 400;
      line-height: 18px;
      color: ${props => props.theme.colors.textTable}; //#b5b5c3
    }
  }

  ${props =>
    props.stylePattern === 'currency' &&
    css`
      min-width: 20%;
      width: 15%;
    `}

  ${props =>
    props.stylePattern === 'number' &&
    css`
      min-width: 20%;
      width: 10%;
      text-align: right;
    `}

  ${props =>
    ['date', 'datetime', 'time'].includes(props.stylePattern as string) &&
    css`
      min-width: 20%;
      width: 15%;

      text-align: 'center';
    `}

  ${props =>
    props.stylePattern === 'string' &&
    css`
      min-width: 20%;
      width: 25%;
    `}

  ${props =>
    props.stylePattern === 'boolean' &&
    css`
      max-width: 30%;

      div {
        width: 65px !important;
        height: 26px;
        background: ${props.theme.colors.success};
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          font-weight: 500;
          font-size: 11px;
          line-height: 16px;
          color: ${props.theme.colors.successText};
        }
      }
    `}

  ${props =>
    props.boolean === 'false' &&
    css`
      div {
        background: ${props.theme.colors.error};

        p {
          color: ${props.theme.colors.errorText};
        }
      }
    `}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    animation: ${rotate} 0.8s ease-in-out 0s infinite;
  }

  p {
    color: #1e1e2d;
    margin-top: 16px;
    font-size: 13px;
  }
`;
