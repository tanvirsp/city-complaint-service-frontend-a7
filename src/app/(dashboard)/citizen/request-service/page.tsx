import ServiceRequestForm from "@/components/form/service-request-form";
import { Card } from "@/components/ui/card";

const RequestServicePage = () => {
  return (
    <section className="p-6 w-3xl mx-auto">
      <Card className="p-6">
        <div className="text-center">
          <h3 className="text-xl">Request a Service</h3>
        </div>
        <ServiceRequestForm />
      </Card>
    </section>
  );
};

export default RequestServicePage;
