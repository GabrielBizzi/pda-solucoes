import React, { useState, useCallback, useEffect } from 'react';

import { Container, TranferListItem } from './styles';

import TranferListAddItem from '../../../assets/svg/transferlist-add-item.svg';
import TranferListRemoveItem from '../../../assets/svg/transferlist-remove-item.svg';
import TranferListArrowRight from '../../../assets/svg/transferlist-arrow-right.svg';
import TranferListArrowLeft from '../../../assets/svg/transferlist-arrow-left.svg';
import TranferListDoubleArrowRight from '../../../assets/svg/transferlist-double-arrow-right.svg';
import TranferListDoubleArrowLeft from '../../../assets/svg/transferlist-double-arrow-left.svg';

interface ListProps {
  transfer_id: number | string;
  transfer_name: string;
}

interface TransferListProps {
  title: string;
  initialList?: object[];
  selectedList?: object[];
  path?: string;
  setSelectedList?(list: object[]): void;
  setInitialList?(list: object[]): void;
  setStateOption?(optionValue: boolean): void;
}

const TranferList: React.FC<TransferListProps> = ({
  title,
  initialList,
  selectedList,
  path,
  setSelectedList,
  setInitialList,
  setStateOption,
}) => {
  const [currentItem, setCurrentItem] = useState(NaN as string | number);
  const [leftList, setLeftList] = useState(() => {
    if (!initialList?.length) return [];

    return initialList.map((item, index) => {
      if (!item) {
        return {};
      }

      return {
        ...item,
        transfer_id: index,
        transfer_name: Object.getOwnPropertyDescriptor(item, String(path))
          ?.value,
      };
    }) as ListProps[];
  });
  const [rightList, setRightList] = useState(() => {
    if (!selectedList?.length) return [];

    return selectedList.map((item, index) => {
      if (!item) {
        return {};
      }

      return {
        ...item,
        transfer_id: `${index}-selected`,
        transfer_name: Object.getOwnPropertyDescriptor(item, String(path))
          ?.value,
      };
    }) as ListProps[];
  });
  const [option, setOption] = useState(false);

  useEffect(() => {
    if (setSelectedList) {
      setSelectedList(rightList);
    }
  }, [setSelectedList, rightList]);

  useEffect(() => {
    if (setInitialList) {
      setInitialList(leftList);
    }
  }, [setInitialList, leftList]);

  const moveToLeftList = useCallback(
    id => {
      const itemList = rightList.find(item => item.transfer_id === id);

      if (!itemList) {
        return;
      }

      const newRightList = rightList.filter(item => item.transfer_id !== id);

      setRightList([...newRightList]);

      setLeftList([...leftList, itemList]);
    },
    [leftList, rightList]
  );

  const moveToRightList = useCallback(
    id => {
      const itemList = leftList.find(item => item.transfer_id === id);

      if (!itemList) {
        return;
      }

      const newLeftList = leftList.filter(item => item.transfer_id !== id);

      setLeftList([...newLeftList]);

      setRightList([...rightList, itemList]);
    },
    [leftList, rightList, setRightList, setLeftList]
  );

  const moveAllToRightList = useCallback(() => {
    setRightList([...rightList, ...leftList]);
    setLeftList([]);
  }, [setRightList, setLeftList, rightList, leftList]);

  const moveAllToLeftList = useCallback(() => {
    setLeftList([...rightList, ...leftList]);
    setRightList([]);
  }, [setLeftList, setRightList, rightList, leftList]);

  return (
    <Container>
      <div className="block">
        <h1>{title}</h1>
        <div className="list list-noselected">
          {leftList &&
            leftList.map(item => (
              <TranferListItem
                key={item.transfer_id}
                onClick={() => setCurrentItem(item.transfer_id)}
                selected={currentItem === item.transfer_id}
              >
                <p>{item.transfer_name}</p>

                <button
                  onClick={() => moveToRightList(item.transfer_id)}
                  type="button"
                  className="icon"
                >
                  <img src={TranferListAddItem} alt="" />
                </button>
              </TranferListItem>
            ))}
        </div>
      </div>
      <div className="buttons">
        <button type="button" onClick={() => moveToRightList(currentItem)}>
          <img src={TranferListArrowRight} alt="" />
        </button>
        <button type="button" onClick={moveAllToRightList}>
          <img src={TranferListDoubleArrowRight} alt="" />
        </button>
        <button type="button" onClick={() => moveToLeftList(currentItem)}>
          <img src={TranferListArrowLeft} alt="" />
        </button>
        <button type="button" onClick={moveAllToLeftList}>
          <img src={TranferListDoubleArrowLeft} alt="" />
        </button>
      </div>
      <div className="block">
        <h1>{`${title} Selecionados`}</h1>
        <div className="list list-selected">
          {rightList &&
            rightList.map(item => (
              <TranferListItem
                key={item.transfer_id}
                onClick={() => setCurrentItem(item.transfer_id)}
                selected={currentItem === item.transfer_id}
              >
                <p>{item.transfer_name}</p>
                <button
                  onClick={() => moveToLeftList(item.transfer_id)}
                  type="button"
                  className="icon"
                >
                  <img src={TranferListRemoveItem} alt="" />
                </button>
              </TranferListItem>
            ))}
        </div>
        {setStateOption && (
          <button
            type="button"
            className="input-option"
            onClick={() => {
              setOption(!option);
              if (setStateOption) {
                setStateOption(!option);
              }
            }}
          >
            <p>{`Selecionar todas as ${title}`}</p>
            <input type="checkbox" checked={option} readOnly />
          </button>
        )}
      </div>
    </Container>
  );
};

export default TranferList;
