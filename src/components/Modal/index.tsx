import { useState } from 'react'
import * as S from './styles'


export type ModalProps = {
    title: string
    children?: React.ReactNode
    isOpen: boolean
    getValueOpen: (value: boolean) => void
}

export default function Modal({ title, children, isOpen, getValueOpen }: ModalProps) {
    console.log('modal', isOpen)
    return (
        <>
            {isOpen && (
                <S.Wrapper>
                    <S.Header>
                        <S.Title>{title}</S.Title>
                    </S.Header>
                    <S.Content>
                        {children}
                    </S.Content>
                </S.Wrapper>
            )}
        </>
    )
}
