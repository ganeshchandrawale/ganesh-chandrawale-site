'use client'
import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function RedirectLogic() {
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

export default function RedirectHandler() {
  return (
    <Suspense fallback={null}>
      <RedirectLogic />
    </Suspense>
  )
}
