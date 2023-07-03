import { CardImage } from "@components/card/styles";
import { CommomBody, CommonContainer } from "@components/common/style";
import { Title } from "@components/header/style";

export const NotFound = () => {
    return <CommonContainer>
        <CardImage src="not_found.svg" />
        <CommomBody>
            <Title>Ops! Não encontramos o que procurava.</Title>
            <p>Estamos trabalhando para solucionar o mais breve possivel.</p>
        </CommomBody>
    </CommonContainer>;
};
