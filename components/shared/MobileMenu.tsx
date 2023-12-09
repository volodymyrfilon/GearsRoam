import { navLinks } from '@/constants'
import useMenuActive from '@/hooks/useMenuActive'
import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { CgClose, CgMenuGridO } from 'react-icons/cg'
import { FaFacebookSquare } from 'react-icons/fa'
import {
	FaSquareInstagram,
	FaSquareSnapchat,
	FaSquareXTwitter,
} from 'react-icons/fa6'
import Button from '../ui/Button'
import Route from '../ui/Route'

interface MobileMenuProps {
	user: User
}

const MobileMenu: FC<MobileMenuProps> = ({ user }) => {
	const [openMobileMenu, setOpenMobileMenu] = useState(false)
	const router = useRouter()
	const mobileMenuHandler = () => {
		setOpenMobileMenu(!openMobileMenu)
	}
	return (
		<>
			<div className='md:hidden' onClick={mobileMenuHandler}>
				{openMobileMenu ? <CgClose size={25} /> : <CgMenuGridO size={25} />}
			</div>

			{openMobileMenu ? (
				<div
					onClick={() => setOpenMobileMenu(false)}
					className='fixed w-full h-screen top-0 left-0 bg-black/25 z-50'
				>
					<div
						onClick={e => e.stopPropagation()}
						className='absolute h-screen left-0 top-0 w-60 bg-white z-[999] px-5 border-r overflow-y-hidden flex flex-col gap-10'
					>
						<div className='border-b py-5 text-center'>
							<Link href={'/'}>
								<h1 className='text-3xl font-extrabold text-secondary'>
									Gears
									<span className='text-primary'>Roam</span>
								</h1>
							</Link>
							<div className='flex gap-5 text-secondary flex-1 justify-center text-xl mt-5'>
								<FaFacebookSquare />
								<FaSquareInstagram />
								<FaSquareXTwitter />
								<FaSquareSnapchat />
							</div>
						</div>

						<ul className='flex items-center justify-center gap-5 flex-col mt-5 py-10 border-b'>
							{navLinks.map((link, index) => {
								const isActive = useMenuActive(link.route)

								return (
									<li key={index}>
										<Route
											route={link.route}
											label={link.label}
											isActive={isActive}
											onClick={() => setOpenMobileMenu(false)}
										/>
									</li>
								)
							})}
						</ul>

						{!user && (
							<div className='flex gap-5 flex-1 flex-col py-5'>
								<Button
									text='Log In'
									onClick={() => router.push('/access')}
									aria='Log in button'
								/>
								<Button
									text='Sign up'
									onClick={() => router.push('/access')}
									aria='Sign up button'
								/>
							</div>
						)}

						{user && (
							<div>
								<ul className='flex flex-col gap-5 items-center'>
									<Link href='/create' onClick={() => setOpenMobileMenu(false)}>
										<li>Create a post</li>
									</Link>
									<Link
										href='/userposts'
										onClick={() => setOpenMobileMenu(false)}
									>
										<li>My posts</li>
									</Link>
									<li onClick={() => signOut()}>Sign out</li>
								</ul>
							</div>
						)}
					</div>
				</div>
			) : null}
		</>
	)
}

export default MobileMenu
