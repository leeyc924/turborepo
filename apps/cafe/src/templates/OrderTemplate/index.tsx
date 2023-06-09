import { Button } from 'components';
import { useCallback, useMemo } from 'react';
import { Menu } from 'types';
import { addSeparator } from 'utils';
import './index.scss';
import { useMutation } from '@tanstack/react-query';
import { baseFetch } from '@app/api';

export interface OrderTemplateProps {
  selectedMenuList: Menu[];
}

export const OrderTemplate = ({ selectedMenuList }: OrderTemplateProps) => {
  const { mutateAsync } = useMutation((menuList: Menu[]) =>
    baseFetch({ url: '/api/cafe/order', method: 'POST', body: { menuList } }),
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
    try {
      if (selectedMenuList.length < 1) {
        alert('메뉴를 선택해주세요');
        return;
      }

      const res = await mutateAsync(selectedMenuList);
      alert('주문이 완료되었습니다');
    } catch (error) {
      alert('주문에 실패하였습니다');
    }
  }, [selectedMenuList, mutateAsync]);

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
        <Button onClick={handleOrder}>주문하기</Button>
      </div>
    </div>
  );
};
