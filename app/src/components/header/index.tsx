import { ChangeEvent } from "react";
import { InputSearch, Title } from "./style";
import { HeaderContainer } from "@components/common/style";

interface HeaderProps {
    search?: string;
    onChangeText?: (search: string) => void;
}

const Header = ({ onChangeText, search }: HeaderProps) => {
    return (
        <HeaderContainer>
            <Title>My Social</Title>
            <InputSearch
                type="text"
                placeholder="Pesquisar"
                value={search}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    onChangeText?.(event.target.value)
                }
            />
        </HeaderContainer>
    );
};
export default Header;
