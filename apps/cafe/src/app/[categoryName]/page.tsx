import { Button } from "components";
import {  } from "next";
import { MenuTemplate } from "../../template";

export default function Cafe({ params: { categoryName } }) {
  return (
    <div>
      <h1>{categoryName}</h1>
      <MenuTemplate />
    </div>
  );
}
