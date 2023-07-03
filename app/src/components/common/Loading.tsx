import { CardImage } from "@components/card/styles";
import { CommomBody, CommonContainer } from "./style";
import { Title } from "@components/header/style";

export const Loading = () => {
    return <CommonContainer>
        <CardImage src="loading.svg" />
        <CommomBody>
            <Title>Carregando...</Title>
            <p>Aguarde! Estamos trabalhando nisso.</p>
        </CommomBody>
    </CommonContainer>;
};
