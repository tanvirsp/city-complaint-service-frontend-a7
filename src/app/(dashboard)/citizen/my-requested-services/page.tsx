import CitizenMyServicesTabs from "@/components/modules/citizen-my-services/citizen-my-services-tabs";

const MyRequestedServices = () => {
  return (
    <section className="p-5">
      <h1 className="mb-3 text-xl">My Paid Services</h1>
      <CitizenMyServicesTabs />
    </section>
  );
};

export default MyRequestedServices;
