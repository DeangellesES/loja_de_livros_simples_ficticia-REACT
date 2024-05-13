import Logo from '../Logo'
import OpecoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
}
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpecoesHeader />
            <IconesHeader />
        </HeaderContainer>

    )
}

export default Header