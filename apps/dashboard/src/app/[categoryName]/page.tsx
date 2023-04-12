import { Button } from "components";
import { NextPageContext } from "next";

export default function Cafe({ query }: NextPageContext) {
  return (
    <div>
      <h1>cafe</h1>
      <Button onClick={() => console.log("ㅋㅋㅋㅋㅋ")}>
        눌러보슈 냉큼 눌러보슈
      </Button>
    </div>
  );
}
