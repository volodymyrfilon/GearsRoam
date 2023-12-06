import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import { AuthContext } from '@/context/AuthContext'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import getCurrentUser from './actions/getCurrentUser'
import './globals.css'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '400', '700', '900'],
})

export const metadata: Metadata = {
	title: 'Safari Travel',
	description: 'Explore Safari with us',
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const user = await getCurrentUser()
	return (
		<html lang='en'>
			<AuthContext>
				<body className={`${roboto.className} overflow-x-hidden bg-light`}>
					<Navbar user={user} />
					{children}
					<Footer />
				</body>
			</AuthContext>
		</html>
	)
}
