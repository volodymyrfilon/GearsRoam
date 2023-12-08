import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import { AuthContext } from '@/context/AuthContext'
import { EdgeStoreProvider } from '@/lib/edgestore'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import getCurrentUser from './actions/getCurrentUser'
import './globals.css'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '400', '700', '900'],
})

export const metadata: Metadata = {
	title: 'Gears Roam',
	description:
		'Explore the world of automobiles with Gears Roam, where passion meets horsepower. Discover in-depth car reviews, latest automotive news, DIY maintenance tips, and everything you need to fuel your love for cars. Buckle up for a thrilling journey through the fast lane of automotive culture and innovation.',
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
				<EdgeStoreProvider>
					<body className={`${roboto.className} overflow-x-hidden bg-light`}>
						<Navbar user={user} />
						{children}
						<Footer />
					</body>
				</EdgeStoreProvider>
			</AuthContext>
		</html>
	)
}
