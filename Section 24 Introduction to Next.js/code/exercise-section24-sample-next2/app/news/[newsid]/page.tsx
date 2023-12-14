'use client'

import Image from 'next/image'
import Link from 'next/link';

export default function Home({params}) {

    const newsId = params.newsid;

  return (
        <main>
        <div>
        <p>
          {newsId}
        </p>
        <p>
         <Link href="/">Back</Link>
        </p>
      </div>

    </main>
  )
}
