'use client' // Error boundaries must be Client Components

import PageWrapper from '@/components/page-wrapper'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <PageWrapper>
            <div className="flex flex-col h-screen items-center justify-center">

                <h2>Something went wrong!</h2>
                <p className='text-destructive mb-10'>{error.message}</p>
                <Button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                >
                    Try again
                </Button>
            </div>
        </PageWrapper>
    )
}