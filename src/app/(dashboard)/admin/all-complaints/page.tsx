import ComplaintsRequestTabs from "@/components/modules/complaints-request/complaints-request-tabs";

const AllComplaintsPage = () => {
  return (
    <section className="p-5">
      <div className="mb-3">
        <h1> All Complaints</h1>
        <p>Please review and make sure the given data is real.</p>
      </div>
      <ComplaintsRequestTabs />
    </section>
  );
};

export default AllComplaintsPage;
