import ServicesRequestTabs from "@/components/modules/service-request/service-request-tabs";

const RequestServicesPage = () => {
  return (
    <section className="p-5">
      <div className="mb-3">
        <h1> All Requested Services</h1>
        <p>Please review and make sure the given data is real.</p>
      </div>
      <ServicesRequestTabs />
    </section>
  );
};

export default RequestServicesPage;
