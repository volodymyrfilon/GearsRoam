import { postTypes } from '@/types/postTypes'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Overlay from '../ui/Overlay'
import Tag from '../ui/Tag'

const BlogCard: FC<{ post: postTypes }> = ({ post }) => {
	return (
		<article className='relative rounded-lg overflow-hidden'>
			<div className='w-[1000px] h-[450px] relative'>
				{post.img && (
					<Image
						src={post.img}
						fill
						alt={`image for${post.title}`}
						className='object-cover'
					/>
				)}
				<Overlay />
			</div>

			<div className='absolute w-full h-full top-0 p-5 flex flex-col justify-between'>
				<div>
					<Tag text={post.category} />
					<h3 className='text-3xl font-extrabold uppercase text-white'>
						{post.title}
					</h3>
				</div>
			</div>

			<Link
				className='absolute bottom-0 right-0 bg-tertiary p-5 rounded-tl-lg z-6 cursor-pointer text-white'
				href={`/blog/${post.id}`}
			>
				<AiOutlineArrowRight size={30} />
			</Link>
		</article>
	)
}

export default BlogCard
