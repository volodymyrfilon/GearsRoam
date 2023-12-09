import { postTypes } from '@/types/postTypes'
import { formatDate } from '@/utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Overlay from '../ui/Overlay'
import Tag from '../ui/Tag'

const TopPost: FC<{ posts: postTypes[] }> = ({ posts }) => {
	const topPost = posts.filter(post => post.topPost === true)
	return (
		<section aria-aria-labelledby='top-post'>
			<div className='w-full text-center'>
				<h2
					id='top-post'
					className='text-center text-2xl font-extrabold uppercase text-tertiary inline-block px-2 mb-10'
				>
					Top Post
				</h2>
			</div>

			<div className='flex h-full flex-col gap-12 items-center'>
				{topPost.map((post, id) => (
					<Link href={`/blog/${post.id}`}>
						<article key={id}>
							<div className='relative cursor-pointer'>
								{post.img && (
									<Image
										src={post.img}
										alt={`image for${post.title}`}
										width={800}
										height={800}
									/>
								)}
								<Overlay />
							</div>
							<div className='w-full flex justify-center'>
								<Tag text={post.category} />
							</div>
							<h3 className='font-extrabold uppercase text-tertiary text-center'>
								{post.title}
							</h3>
							<div className='flex gap-3 justify-center mt-2'>
								<span className='font-light'>By: {post.user.name}</span>
								<span className='italic font-light'>
									{formatDate(post.createdAt.toString())}
								</span>
							</div>
						</article>
					</Link>
				))}
			</div>
		</section>
	)
}

export default TopPost
