import AdminServiceRequestTabs from "@/components/modules/admin-service-request/admin-service-request-tabs";

const RequestServicesPage = () => {
  return (
    <section className="p-5">
      <div className="mb-3">
        <h1 className="text-lg"> All Requested Services</h1>
        <p>Please review and make sure the given data is real.</p>
      </div>
      <AdminServiceRequestTabs />
    </section>
  );
};

export default RequestServicesPage;
