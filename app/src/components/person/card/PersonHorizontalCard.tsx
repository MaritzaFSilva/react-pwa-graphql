import { Friend, Person } from "../../../@types/person";
import {
    CardHorizontal,
    CardImage,
    CardLabel,
    CardSpan,
    CardBody,
} from "@components/card/styles";

type CardProps = {
    person: Person | Friend;
};
export const PersonHorizontalCard = ({ person }: CardProps) => {
    return (
        <CardHorizontal>
            <CardImage src={person.picture} />

            <CardBody>
                <CardLabel>
                    Nome: <CardSpan>{person.name}</CardSpan>
                </CardLabel>
                <CardLabel>
                    Idade: <CardSpan>{person.age}</CardSpan>
                </CardLabel>
                <CardLabel>
                    Cor dos Olhos: <CardSpan>{person.eyeColor}</CardSpan>
                </CardLabel>
                <CardLabel>
                    Empresa: <CardSpan>{person.company}</CardSpan>
                </CardLabel>
                <CardLabel>
                    Email: <CardSpan>{person.email}</CardSpan>
                </CardLabel>
            </CardBody>
        </CardHorizontal>
    );
};
