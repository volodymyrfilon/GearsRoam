import { blogData } from '@/constants/blogData'
import Link from 'next/link'
import Overlay from '../ui/Overlay'
import Tag from '../ui/Tag'

const Hero = () => {
	const featuredPost = blogData.filter(blog => blog.featured === true)

	const topFeatured = featuredPost.slice(0, 1)

	const bottomFeatured = featuredPost.slice(1, 4)

	return (
		<section className='relative'>
			<div className='w-[95%] mx-auto max-w-[1450px] z-1'>
				{topFeatured.map((post, id) => (
					<article
						key={id}
						className='flex flex-col gap-5 mb-5 text-center relative'
					>
						<Tag text={post.tags} />
						<h2 className='text-6xl uppercase text-tertiary font-extrabold'>
							{post.title}
						</h2>
						<div className='items-center flex text-tertiary gap-3 justify-center font-light'>
							<div className='w-10 h-10 rounded-full bg-black'></div>
							<span>{post.authorName}</span>
							<span className='italic'>{post.publishDate}</span>
						</div>
						<Link
							href={{
								pathname: `blog/${post.id}`,
								query: { ...post },
							}}
						>
							<div className='relative max-h-[600px] overflow-hidden shadow-xl'>
								<img
									src={post.image_path}
									alt={`image for${post.title}`}
									className='object-cover w-full h-full'
								/>
								<Overlay />
							</div>
						</Link>
					</article>
				))}

				<div className='grid grid-cols-3 gap-8 max-lg:grid-cols-1'>
					{bottomFeatured.map((post, id) => (
						<article className='flex flex-col gap-3 items-center text-center relative'>
							<Link
								className='w-full'
								href={{
									pathname: `blog/${post.id}`,
									query: { ...post },
								}}
							>
								<div className='relative overflow-hidden h-72 shadow-xl w-full'>
									<img
										src={post.image_path}
										alt={`image for${post.title}`}
										className='object-cover w-full h-full'
									/>
									<Overlay />
								</div>
							</Link>
							<Tag text={post.tags} />
							<h3 className='text-sm font-extrabold uppercase text-tertiary px-5'>
								{post.title}
							</h3>
							<span className='font-light italic'>{post.publishDate}</span>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default Hero