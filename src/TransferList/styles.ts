import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .block {
    max-width: 45%;
    flex: 1;
    align-self: flex-start;

    &:last-child {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      h1 {
        position: relative;
        left: 12%;
      }
    }

    h1 {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: #212121;
      margin-bottom: 8px;
      align-self: flex-start;
    }

    .list {
      max-width: 450px;
      width: 100%;
      height: 400px;
      border-radius: 7px;
      background: #f3f6f9;
      padding: 16px;
      overflow-y: scroll;
    }

    &:last-child {
      .list {
        background: #c9f7f5;
      }
    }

    .input-option {
      display: flex;
      align-items: center;
      align-self: flex-start;
      margin-top: 24px;
      background: transparent;

      p {
        font-size: 12px;
      }

      input {
        margin-left: 16px;
        width: 18px;
        height: 18px;
      }
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10%;

    button {
      width: 32px;
      height: 32px;
      background: #f3f6f9;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 20px;
      }

      & + button {
        margin-top: 4px;
      }

      &:nth-of-type(2) {
        margin-bottom: 20px;
      }
    }
  }

  @media screen and (max-width: 610px) {
    flex-direction: column;

    .block {
      max-width: 100%;
      width: 100%;
      align-self: flex-start !important;

      &:last-child {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h1 {
          position: relative;
          left: 0%;
        }
      }
    }

    .buttons {
      width: 40%;
      align-items: center;
      justify-content: space-between;
      flex-direction: row-reverse;
      margin: 16px 0;

      button {
        margin: 0 !important;
        margin: 0 8px;
      }
    }
  }
`;

interface TranferListItemProps {
  selected?: boolean;
}

export const TranferListItem = styled.div<TranferListItemProps>`
  width: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => (props.selected ? '#fff' : 'transparent')};

  &:hover {
    background: #fff;
    cursor: pointer;
  }

  & + button {
    margin-top: 8px;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #464e5f;
  }

  .icon {
    width: 24px;
    height: 24px;
    background: transparent;

    img {
      max-width: 100%;
    }
  }
`;
