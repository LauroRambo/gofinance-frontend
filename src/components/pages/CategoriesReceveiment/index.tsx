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
    <S.Wrapper>
      <CategoriesReceveimentAdd getValueOpen={openAddModal} isOpen={modalIsOpen}/>
      <ListCategories openModal={openAddModal}/>
    </S.Wrapper>
  )
}

export default CategoriesReceveiment
