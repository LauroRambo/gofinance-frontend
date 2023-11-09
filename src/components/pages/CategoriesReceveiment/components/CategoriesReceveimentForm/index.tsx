import Input from '@/components/Input'
import * as S from './styles'
import Button from '@/components/Button'

export default function CategoriesReceveimentForm() {
    return (
        <S.Container>
            <S.Inputs>
                <Input name='title' label='Título' placeholder='Digite o t´titulo da categoria' />
                <Input name='description' label='Descrição' placeholder='Digite o título da descrição' />
            </S.Inputs>
            <Button>
                Salvar
            </Button>
        </S.Container>
    )
}
