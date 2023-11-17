'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  description: string
  image: string | StaticImageData
  link: string
}

function BookCard({ title, description, image, link }: Props) {
  return (
    <div className="m-4 flex max-w-md flex-col items-center gap-4 rounded bg-purple-100 p-4">
      <h3 className="text-2xl">{title}</h3>
      <hr className="my-2 h-0.5 w-full rounded border-0 bg-purple-400" />
      <div className="text-lg">{description}</div>
      <Image src={image} alt={title} />
      <Link href={link} target="_blank">
        <button className="mb-8 mt-4 rounded bg-secondary px-2 py-2 text-white">
          노하우 북 다운로드
        </button>
      </Link>
    </div>
  )
}

export default BookCard
