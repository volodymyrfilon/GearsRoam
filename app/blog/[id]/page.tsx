import Tag from '@/components/ui/Tag'
import { postTypes } from '@/types/postTypes'
import { formatDate } from '@/utils/formatDate'
import Image from 'next/image'
import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineTwitter,
} from 'react-icons/ai'

const getData = async (id: string) => {
	const res = await fetch(`http://localhost:3000/api/post/${id}`, {
		cache: 'no-store',
	})

	if (!res.ok) {
		throw new Error('Failed')
	}

	return res.json()
}

const page = async ({ params }: { params: postTypes }) => {
	const { id } = params
	const post = await getData(id)
	return (
		<div className='w-[95%] mx-auto max-w-[1450px]'>
			<div className='w-full h-[400px] relative mb-5'>
				<Image
					fill
					alt='image for blog'
					src={post.img}
					className='object-cover'
				/>
			</div>

			<Tag text={post.category} />
			<h2 className='text-4xl font-extrabold text-tertiary uppercase my-3'>
				{post.title}
			</h2>
			<div className='flex md:gap-20 gap-5 relative mt-10 md:flex-row flex-col'>
				<aside className='md:sticky md:top-2/4 md:h-screen'>
					<span className='uppercase text-2xl font-extrabold text-tertiary'>
						Share:
					</span>
					<div className='flex text-3xl gap-5 text-gray-400 mt-2 [&>*]:border'>
						<AiOutlineTwitter />
						<AiOutlineInstagram />
						<AiOutlineFacebook />
					</div>
				</aside>

				<article>
					<p className='text-xl'>{post.desc}</p>

					<div className='flex mt-5 gap-5 items-center'>
						<Image
							src={post.user.image}
							width={500}
							height={500}
							alt={`Image of ${post.user.name}`}
							className='rounded-full w-20 h-20 object-cover'
						/>
						<div className='flex flex-col gap-1'>
							<span>{post.user.name}</span>
							<span>{formatDate(post.createdAt)}</span>
						</div>
					</div>
				</article>
			</div>
		</div>
	)
}

export default page
