import React from "react";
import { sum } from "@gabrielmarinho/utils/math/sum";
import { Text } from "@gabrielmarinho/design-system/components/Text";
import * as S from "./styles";

export function HomeScreen() {
  return (
    <S.Main>
      <S.Container>
        <Text tag="h1">Home</Text>
        <Text tag="p">
          Importando modulo local: @gabrielmarinho/utils/math/sum sum(1,1) ={" "}
          {sum(1, 1)}
        </Text>
      </S.Container>
    </S.Main>
  );
}
