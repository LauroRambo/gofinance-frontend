import Input from '@/components/Input'
import * as S from './styles'
import Button from '@/components/Button'

type AuthLayoutProps = {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <S.Container>
            {children}
        </S.Container>
            
    )
}

export default AuthLayout