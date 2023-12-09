import { User } from '@prisma/client'

export interface postTypes {
	id: string
	title: string
	img: string | null
	desc: string
	featured: boolean
	topPost: boolean
	category: string
	createdAt: string | Date
	user: User
}
