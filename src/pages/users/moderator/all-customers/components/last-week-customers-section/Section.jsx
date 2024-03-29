import CustomerCard from './CustomerCard';
import CustomersSkeleton from './CustomerCardSkeleton';

// Task: This component needs to be refactored with the new data structure and new endpoint

function LastWeekCustomersSection({ customers, loading }) {
  return (
    <section className="flex flex-col gap-2 bg-pro-50 p-4">
      <p>New customers this week</p>
      {loading ? (
        <div className="scrollbar-hide flex gap-3 overflow-x-auto rounded-none py-1">
          <CustomersSkeleton />
        </div>
      ) : customers.length === 0 ? (
        <p className="text-progray-300">No new customers this week</p>
      ) : (
        <div className="scrollbar-hide flex gap-3 overflow-x-auto rounded-none py-1">
          {customers.map((customer) => (
            <CustomerCard key={customer.customerId} customer={customer} />
          ))}
        </div>
      )}
    </section>
  );
}

export default LastWeekCustomersSection;