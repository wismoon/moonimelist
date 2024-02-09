import { getServerSession } from 'next-auth'
import { authOption } from '@/app/api/auth/[...nextauth]/route'

//auth user session where we make user has signin or signout
export const authUserSession = async() => {
  //geserversession get authOptions from api route where user signin
  const session = await getServerSession(authOption)
  //check if users already signin
  return session?.user
}
