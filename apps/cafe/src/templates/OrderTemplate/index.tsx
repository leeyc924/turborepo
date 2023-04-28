import { Button } from 'components';
import { useCallback, useMemo } from 'react';
import { Menu } from 'types';
import { addSeparator } from 'utils';
import './index.scss';
import { useMutation } from '@tanstack/react-query';

export interface OrderTemplateProps {
  selectedMenuList: Menu[];
}

export const OrderTemplate = ({ selectedMenuList }: OrderTemplateProps) => {
  const { mutateAsync } = useMutation((menuList: Menu[]) =>
    fetch('http://localhost:8005/api/cafe/order', {
      method: 'post',
      body: {
        menuList,
      },
    }),
  );
  const [totalCnt, totalPrice] = useMemo(
    () =>
      selectedMenuList.reduce(
        ([totalCnt, totalPrice], cur) => {
          totalCnt += 1;
          totalPrice += cur.price;
          return [totalCnt, totalPrice];
        },
        [0, 0],
      ),
    [selectedMenuList],
  );

  const handleOrder = useCallback(async () => {
    await mutateAsync(selectedMenuList);
  }, []);
  return (
    <div className="order-template">
      <div className="left">
        <dl>
          <dt>총</dt>
          <dd>{totalCnt} 잔</dd>
        </dl>
        <dl>
          <dt>총</dt>
          <dd>{addSeparator(totalPrice)} 원</dd>
        </dl>
      </div>
      <div className="right">
        <Button>주문하기</Button>
      </div>
    </div>
  );
};
