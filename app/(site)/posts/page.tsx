import Posts from '@/components/shared/Posts'
import TopPost from '@/components/shared/TopPost'

const page = () => {
	return (
		<div>
			<div className='grid mx-auto lg:grid-cols-3 lg:gap-10 grid-cols-1 w-[95%] max-w-[1450px] overflow-y-hidden h-fit max-lg:space-y-7 mt-10'>
				<Posts />
				<TopPost />
			</div>
		</div>
	)
}

export default page
