import { getBookings } from "@/actions/bookings";
import { getContacts } from "@/actions/contact";
import Dashboard from "@/components/dashboard";
import PageWrapper from "@/components/page-wrapper";

const AdminPage = async () => {
  const queries = await getContacts();
  const bookings = await getBookings();

  return (
    <PageWrapper>
      <h1 className="text-4xl font-black">Dashboard</h1>
      <Dashboard
        queries={JSON.stringify(queries.data)}
        bookings={JSON.stringify(bookings.data)}
      />
    </PageWrapper>
  );
};

export default AdminPage;
