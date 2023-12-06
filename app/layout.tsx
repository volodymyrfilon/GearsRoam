import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import { AuthContext } from '@/context/AuthContext'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '400', '700', '900'],
})

export const metadata: Metadata = {
	title: 'Safari Travel',
	description: 'Explore Safari with us',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<AuthContext>
				<body className={`${roboto.className} overflow-x-hidden bg-light`}>
					<Navbar />
					{children}
					<Footer />
				</body>
			</AuthContext>
		</html>
	)
}
