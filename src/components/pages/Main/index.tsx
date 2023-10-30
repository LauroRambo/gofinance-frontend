import Card from '@/components/Card'
import * as S from './styles'
import Button from '@/components/Button'

const Main = () => (
  <S.Wrapper>
    <S.Main>
      <S.Graph>
        graph
      </S.Graph>
      <S.Cards>
        <Card title='Saldo a Pagar' count='120.55' />
        <Card title='Saldo a Receber' count='100.55' />
        <Card title='Saldo Total' count='-20.00' />
        <Button>
          Download
        </Button>
      </S.Cards>
    </S.Main>
  </S.Wrapper>
)

export default Main
