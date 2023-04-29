import { Button } from 'components';
import './index.scss';
export interface HomeTemplateProps {}

export const HomeTemplate = ({}: HomeTemplateProps) => {
  return (
    <div className="home-template">
      <div className="next-button">
        <Button href="/menu/0">주문하기</Button>
      </div>
    </div>
  );
};
