import styled, { css } from 'styled-components'

export const Wrapper = styled.main.attrs({
    id: 'WrapperInput'
})`
`

export const Label = styled.label`
    ${({ theme }) => css`
        font-family: ${theme.font.family};
        font-style: normal;
        font-weight: ${theme.font.bold};
        font-size: 16px;
        line-height: 25px;

        display: flex;
        align-items: center;

        color: ${theme.colors.black};
    `}
`