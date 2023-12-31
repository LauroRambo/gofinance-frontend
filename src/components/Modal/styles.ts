import styled, { css } from 'styled-components'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { IoCloseCircleOutline } from 'react-icons/io5'


export const Wrapper = styled.div.attrs({
    'data-testid': 'WrapperCard'
})`
    height: 50vh;
    width: 60vw;

    ${ ({ theme }) => css`
        background: ${theme.colors.white};    
    `}
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 10px;
    
    border-radius: 7px;

    position: relative;
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    padding: 0 10px:
`

export const Title = styled.h3`
    ${ ({ theme }) => css`
        font-family: ${theme.font.family}; 
        color: ${theme.colors.black};   
        display: flex;
        align-items: flex-start; 
    `}
`

export const CloseIcon = styled(IoCloseCircleOutline)`
    ${ ({ theme }) => css`
        font-family: ${theme.font.family}; 
        color: ${theme.colors.black};    
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        font-size: 20px;
        cursor: pointer;
    `}
`


export const Content = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
`

export const IconDolar = styled(RiMoneyDollarCircleLine)`
    ${ ({ theme }) => css`
        color: ${theme.colors.baseColorYellow};    
    `}
`

export const Count = styled.h2`
    ${ ({ theme }) => css`
        font-family: ${theme.font.family}; 
        color: ${theme.colors.black};    
    `}
    margin: 5px 0 0 5px;
`

