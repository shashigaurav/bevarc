import BookingForm from '@/components/booking-form'
import PageWrapper from '@/components/page-wrapper'

const BookingPage = () => {
    return (
        <PageWrapper>
            <h1 className='text-4xl font-black text-center py-4'>Book a Service</h1>
            <BookingForm />
        </PageWrapper>
    )
}

export default BookingPage