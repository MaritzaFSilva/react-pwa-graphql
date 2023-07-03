import { CardBody, CardImage } from "@components/card/styles";
import { CommomBody, CommonContainer } from "./style";
import { Title } from "@components/header/style";


const Error = () => {
    return (
        <CommonContainer>
            <CardImage src="working.svg" />
            <CommomBody>
                <Title>Ocorreu um erro !</Title>
                <p>Estamos trabalhando para solucionar o mais breve possivel.</p>
            </CommomBody>
        </CommonContainer>
    );
};

export default Error;
