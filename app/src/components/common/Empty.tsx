import { CardImage } from "@components/card/styles";
import { CommomBody, CommonContainer } from "./style";
import { Title } from "@components/header/style";

export const Empty = () => {
    return <CommonContainer>
    <CardImage src="empty.svg" />
    <CommomBody>
        <Title>Eiita</Title>
        <p>Não encontramos nenhum dado!</p>
    </CommomBody>
</CommonContainer>;
};
