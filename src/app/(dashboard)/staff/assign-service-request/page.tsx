import StaffAssignServiceRequestTabs from "@/components/modules/staff-assign-service-request/staff-assign-service-request-tabs";

const AssignServiceRequestPage = () => {
  return (
    <section className="p-5">
      <h3 className="text-xl mb-3">My Assigned Services</h3>
      <StaffAssignServiceRequestTabs />
    </section>
  );
};

export default AssignServiceRequestPage;
