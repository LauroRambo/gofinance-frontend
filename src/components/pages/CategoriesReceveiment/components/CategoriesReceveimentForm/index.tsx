import Input from '@/components/Input'
import * as S from './styles'
import Button from '@/components/Button'

export default function CategoriesReceveimentForm() {
    return (
        <S.Container>
            <S.Inputs>
                <Input name='title' label='Título' placeholder='Digite o título' />
                <Input name='description' label='Descrição' placeholder='Digite a descrição' />
            </S.Inputs>
            <Button>
                Salvar
            </Button>
        </S.Container>
    )
}
