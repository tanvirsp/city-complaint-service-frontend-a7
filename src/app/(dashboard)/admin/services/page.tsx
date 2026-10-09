import ServiceTable from "@/components/modules/services/service-table";

const ServicePage = () => {
  return (
    <section className="p-5">
      <h3 className="text-2xl font-semibold mb-3">Our Paid Services</h3>
      <ServiceTable />
    </section>
  );
};

export default ServicePage;
