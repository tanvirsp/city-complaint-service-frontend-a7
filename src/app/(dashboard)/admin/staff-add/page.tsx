import StaffAddForm from "@/components/form/staff-add-form";

const StaffAddPage = () => {
  return (
    <section className="w-xl mx-auto p-6 border border-gray-100 bg-white mt-10 rounded-2xl">
      <h2 className="text-center text-2xl mb-3">Add a new Staff</h2>
      <StaffAddForm />
    </section>
  );
};

export default StaffAddPage;
