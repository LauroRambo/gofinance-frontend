import { useState } from 'react';
import CategoriesReceveimentAdd from './components/CategoriesReceveimentAdd';
import * as S from './styles'
import ListCategories from '@/components/ListCategories'


const CategoriesReceveiment = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const openAddModal = (value: boolean) => {
    setModalIsOpen(true)
  }
  return (
    <>
      <S.Wrapper>
        <ListCategories openModal={openAddModal} />
        <S.ModalArea>
          <CategoriesReceveimentAdd getValueOpen={openAddModal} isOpen={modalIsOpen} />
        </S.ModalArea>
      </S.Wrapper>
    </>
  )
}

export default CategoriesReceveiment
