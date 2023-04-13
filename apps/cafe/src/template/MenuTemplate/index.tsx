import { Button } from "components";

export interface MenuTemplateProps {}

export const MenuTemplate = ({}: MenuTemplateProps) => {
  return (
    <div>
      <Button onClick={() => alert("click")}>클릭해보라우</Button>
    </div>
  );
};
