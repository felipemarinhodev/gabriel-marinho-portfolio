import React from "react";
import { sum } from "@gabrielmarinho/utils/math/sum";

export default function HomeScreen() {
  return (
    <main>
      <h1>Home</h1>
      <p>
        Importando modulo local: @gabrielmarinho/utils/math/sum sum(1,1) ={" "}
        {sum(1, 1)}
      </p>
    </main>
  );
}
