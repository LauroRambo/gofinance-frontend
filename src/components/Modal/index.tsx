import { useState } from 'react'
import * as S from './styles'


export type ModalProps = {
    title: string
    children: string
    isOpen: boolean
    getValueOpen: (value: boolean) => void
}

export default function Modal({ title, children, isOpen, getValueOpen }: ModalProps) {
    const [isModalOpen, setModalOpen] = useState<boolean>(isOpen)
    return (
        <>
            {isModalOpen && (
                <S.Wrapper>
                    <S.Header>
                        <S.Title>{title}</S.Title>
                    </S.Header>
                    <S.Content>
                        <S.IconDolar size={40} />
                        <S.Count>{count}</S.Count>
                    </S.Content>
                </S.Wrapper>
            )}
        </>
    )
}
