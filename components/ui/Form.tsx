'use client'

import { FormEvent, ReactNode, useRef } from 'react'

interface FormProps {
	children: ReactNode
	action: (formData: FormData) => Promise<void | boolean>
	className?: string
	onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}

const Form = ({ children, action, className, onSubmit }: FormProps) => {
	const ref = useRef<HTMLFormElement>(null)

	return (
		<form
			className={className}
			onSubmit={onSubmit}
			action={async formData => {
				await action(formData)
				ref.current?.reset()
			}}
			ref={ref}
		>
			{children}
		</form>
	)
}

export default Form
