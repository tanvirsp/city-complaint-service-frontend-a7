import PaymentHistoryTabs from "@/components/modules/payment/payment-history-tabs";

const MyPaymentHistoryPage = () => {
  return (
    <section className="p-5">
      <h1 className="mb-3 text-xl">Payment History</h1>
      <PaymentHistoryTabs />
    </section>
  );
};

export default MyPaymentHistoryPage;
