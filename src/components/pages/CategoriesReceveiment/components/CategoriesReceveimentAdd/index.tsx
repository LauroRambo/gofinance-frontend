import Modal from '@/components/Modal'
import CategoriesReceveimentForm from '../CategoriesReceveimentForm'

export type CategoriesReceveimentAddProps = {
    isOpen: boolean
    getValueOpen: (value: boolean) => void
}

const CategoriesReceveimentAdd = ({ isOpen, getValueOpen }: CategoriesReceveimentAddProps) => {
    console.log(isOpen)
    return (
        <Modal
            title='Adicionar novo recebimento'
            isOpen={isOpen}
            getValueOpen={getValueOpen}
        >
            <CategoriesReceveimentForm />
        </Modal>
    )
}
export default CategoriesReceveimentAdd
