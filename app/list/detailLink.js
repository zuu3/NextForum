'use client'

import { useRouter } from "next/navigation"

export default function detailLink () {
  let router = useRouter();
  return (
    <button onClick={() => { router.push('/detail/adfadf') }}>버튼</button>
  )
}