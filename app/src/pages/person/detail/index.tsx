import { Link, useParams } from "react-router-dom";
import { Person } from "../../../@types/person";
import { useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import Header from "@components/header";
import { usePersonQuery } from "@/actions/person";
import { CardList } from "@components/card/styles";
import { PersonVerticalCard } from "@components/person/card/PersonVerticalCard";
import { Title } from "@components/typography/Title";
import { PersonHorizontalCard } from "@components/person/card/PersonHorizontalCard";
import { ButtonStyle, ContainerHeader } from "./styles";
import { ApolloStateQuery } from "@components/common/ApolloStateQuery";

const PersonDetail = () => {
    const { state } = useLocation<{ person: Person }>();

    const { id } = useParams<{ id: string }>();

    const [search, setSearch] = useState("");

    const [searchDebounce] = useDebounce(search, 300);

    const personQuery = usePersonQuery({
        id,
        searchFriend: searchDebounce,
    });

    const person = useMemo(
        () => personQuery.data?.getPersonById || state.person,
        [personQuery.data, state]
    );

    return (
        <>
            <ContainerHeader>
                <Header onChangeText={setSearch} search={search} />
                <ButtonStyle as={Link} to="/">
                    Voltar Tela Principal
                </ButtonStyle>
            </ContainerHeader>

            <PersonHorizontalCard person={person} />

            <Title>Amigos</Title>
            <ApolloStateQuery query={personQuery}>
                <CardList>
                    {person.friends?.map((person) => {
                        return (
                            <PersonVerticalCard person={person} key={person._id} />
                        );
                    })}
                </CardList>
            </ApolloStateQuery>
        </>
    );
};

export default PersonDetail;
