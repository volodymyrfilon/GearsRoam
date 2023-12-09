import Posts from '@/components/shared/Posts'
import TopPost from '@/components/shared/TopPost'
import prisma from '@/lib/prismadb'

const page = async () => {
	const posts = await prisma.blog.findMany({
		include: {
			user: true,
		},
	})
	return (
		<div>
			<div className='grid mx-auto lg:grid-cols-3 lg:gap-10 grid-cols-1 w-[95%] max-w-[1450px] overflow-y-hidden h-fit max-lg:space-y-7 mt-10'>
				<Posts posts={posts} />
				<TopPost posts={posts} />
			</div>
		</div>
	)
}

export default page
