import styled, { css } from 'styled-components'

export const Wrapper = styled.div.attrs({
    'data-testid': 'WrapperCard'
})`
    padding: 50px 110px;

    ${ ({ theme }) => css`
        background: ${theme.colors.white};    
    `}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    top: 5;
    right: 0;
`

export const Header = styled.div`

`

export const Content = styled.div`

`