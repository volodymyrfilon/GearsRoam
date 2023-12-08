'use client'

import { postTypes } from '@/types/postTypes'
import { FC, useState } from 'react'
import Button from '../ui/Button'
import BlogCard from './BlogCard'

const Posts: FC<{ posts: postTypes[] }> = ({ posts }) => {
	const [visibleBlogs, setVisibleBlogs] = useState(5)
	const showMoreBlogs = () => {
		setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 3)
	}

	return (
		<section className='col-span-2' aria-labelledby='latest-post'>
			<div className='w-full text-center'>
				<h2
					id='latest-post'
					className='text-center text-2xl font-extrabold uppercase text-tertiary inline-block px-2 mb-10'
				>
					Latest Post
				</h2>
			</div>

			<div className='flex flex-col gap-10 h-full'>
				{posts.slice(0, visibleBlogs).map((post, id) => (
					<BlogCard post={post} key={id} />
				))}
				{visibleBlogs < posts.length && (
					<div className='flex justify-center'>
						<Button
							onClick={showMoreBlogs}
							text='Show more'
							aria='Show more blog post'
						/>
					</div>
				)}
			</div>
		</section>
	)
}

export default Posts
