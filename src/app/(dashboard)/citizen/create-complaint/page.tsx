import CompliantCreateform from "@/components/form/compliant-create-form";
import { Card } from "@/components/ui/card";

const CreateComplaintPage = () => {
  return (
    <section className="p-6 w-3xl mx-auto">
      <Card className="p-6">
        <div className="text-center">
          <h3 className="text-2xl">Create a complaint</h3>
        </div>
        <CompliantCreateform />
      </Card>
    </section>
  );
};

export default CreateComplaintPage;
