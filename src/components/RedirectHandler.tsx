'use client'
import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function RedirectHandler() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const redirectPath = searchParams.get('p')
    if (redirectPath) {
      // Remove the query parameter and navigate to the actual path
      window.history.replaceState(null, '', redirectPath)
      router.replace(redirectPath)
    }
  }, [router, searchParams])

  return null
}
