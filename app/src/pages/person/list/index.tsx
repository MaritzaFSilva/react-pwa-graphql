import { useDebounce } from "use-debounce";
import { usePersonsQuery } from "@/actions/persons";
import { ApolloStateQuery } from "@components/common/ApolloStateQuery";
import { useState, useMemo } from "react";
import Header from "@components/header";
import { MainContainer } from "./style";
import { PersonVerticalCard } from "@components/person/card/PersonVerticalCard";
import { Link } from "react-router-dom";
import { CardList } from "@components/card/styles";

const PersonList = () => {
    const [search, setSearch] = useState<string>("");
    const [searchDebounce] = useDebounce(search, 300);

    const personsQuery = usePersonsQuery({ search: searchDebounce });

    const persons = useMemo(
        () => personsQuery?.data?.list || [],
        [personsQuery]
    );

    return (
        <MainContainer>
            <Header onChangeText={setSearch} search={search} />

            <ApolloStateQuery query={personsQuery}>
                <CardList>
                    {persons?.map((person) => {
                        return (
                            <Link
                                style={{
                                    textDecoration: "none"
                                }}
                                to={{
                                    pathname: `/person/${person._id}`,
                                    state: { person },
                                }}
                                key={person._id}
                            >
                                <PersonVerticalCard person={person} />
                            </Link>
                        );
                    })}
                </CardList>
            </ApolloStateQuery>
        </MainContainer>
    );
};
export default PersonList;
