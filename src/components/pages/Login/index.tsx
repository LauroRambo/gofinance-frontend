import Input from '@/components/Input'
import * as S from './styles'
import Button from '@/components/Button'

export default function Login() {
    return (
        <S.Container>
            <S.ImgLogin src='/img/logo-finance.svg'/>
            <Input name='login' label='Login' placeholder='Digite seu nome'/>
            <Input name='senha' label='Senha' placeholder='Digite sua senha'/>
            <Button>
                Entrar
            </Button>
        </S.Container>
    )
}
