'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const page = () => {
	const session = useSession()
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		if (session?.status === 'authenticated') {
			console.log('Authenticated')
			router.push('/')
		}
	}, [session?.status, router])

	return <div>xaxaxax</div>
}

export default page
