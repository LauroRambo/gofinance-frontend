import AuthLayout from '@/components/Layouts/AuthLayout'
import Main from '@/components/pages/Main'
import Login from '@/components/pages/Login'

export default function Auth() {
  return (
    <AuthLayout>
        <Login />
    </AuthLayout>
  )
}
