import React from "react";
import { sum } from "@gabrielmarinho/utils/math/sum";
import { Text } from "@gabrielmarinho/design-system/components/Text";

export default function HomeScreen() {
  return (
    <main>
      <Text tag="h1">Home</Text>
      <Text tag="p">
        Importando modulo local: @gabrielmarinho/utils/math/sum sum(1,1) ={" "}
        {sum(1, 1)}
      </Text>
    </main>
  );
}
