import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type InputProps = {
    label?: string 
} & InputHTMLAttributes<HTMLInputElement>

export default function Input({name, label}: InputProps) {
    return (
        <S.Wrapper>
            <S.Label htmlFor={name}>{label}</S.Label>
            <S.InputWrapper>
                
            </S.InputWrapper>
        </S.Wrapper>
    )
}
