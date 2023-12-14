import NextAuth from 'next-auth'
import authOptions from './options' // Update the path accordingly

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
