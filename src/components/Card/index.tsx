import * as S from './styles'

export type CardProps = {
    title?: string
    count?: string 
} 

export default function Card({title, count}: CardProps) {
    return (
        <S.Wrapper>
            <S.Header>
                {title}
            </S.Header>
            <S.Content>
                {count}
            </S.Content>
        </S.Wrapper>
    )
}
