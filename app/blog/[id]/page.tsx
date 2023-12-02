interface searchParamsTypes {
	id: string
	title: string
	image_path: string
	paragraph: string
	featured: boolean
	topPost: boolean
	tags: string
	authorImage: string
	authorName: string
	publishDate: string
}

const page = ({ searchParams }: { searchParams: searchParamsTypes }) => {
	const post = searchParams
	return <div>{post.title}</div>
}

export default page
