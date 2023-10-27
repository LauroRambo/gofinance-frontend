import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const ButtonWrapper = styled.button.attrs({
    'data-testid': 'ButtonWrapper'
})<ButtonProps>`
    ${({ theme, disabled }) => css`
        background-color: ${theme.colors.tomato};
        font-family: ${theme.font.family};
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 16px;
        padding: 15px 120px;

        border-radius: 5px;
        cursor: pointer;
        letter-spacing: 0;
        border: none;
        margin: 10px 0;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.2);
        }

        ${disabled && css`
            cursor: not-allowed;
            opacity: 0.7;
        `}

        color: ${theme.colors.white};
    `}
`

export const Content = styled.div``