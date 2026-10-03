"use client";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useLogin } from "@/hooks";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const QuickDemoLogin = () => {
  const { mutate: login, isPending: loginPending } = useLogin();
  const router = useRouter();

  const handleLogin = (email: string, password: string) => {
    const loginData = {
      email,
      password,
    };

    login(loginData, {
      onSuccess: (res) => {
        toast.success("Login Success");
        router.push("/");
      },
      onError: (err) => {
        toast.error("Authorization failure");
      },
    });
  };

  return (
    <div>
      <div className="border rounded-2xl p-3 flex flex-col items-center">
        <div className="flex gap-2 items-center">
          <User className="size-4" />
          <span className="font-semibold">Admin</span>
        </div>
        <Button
          onClick={() =>
            handleLogin("testeradmin@gmail.com", "Tester@admin12345")
          }
          className="mt-2  w-full bg-blue-500"
          disabled={loginPending}
        >
          {loginPending ? (
            <>
              <Spinner /> submitting
            </>
          ) : (
            "Demo Login"
          )}
        </Button>
      </div>
      <div className="flex justify-between gap-3 mt-2">
        <div className="w-full border rounded-2xl p-3 flex flex-col items-center">
          <div className="flex gap-2 items-center">
            <User className="size-4" />
            <span className="font-semibold">Staff</span>
          </div>
          <Button
            onClick={() =>
              handleLogin("testerstaff@gmail.com", "Tester@staff12345")
            }
            className="mt-2  w-full bg-green-700"
            disabled={loginPending}
          >
            {loginPending ? (
              <>
                <Spinner /> submitting
              </>
            ) : (
              "Demo Login"
            )}
          </Button>
        </div>
        <div className="w-full border rounded-2xl p-3 flex flex-col items-center">
          <div className="flex gap-2 items-center">
            <User className="size-4" />
            <span className="font-semibold">Citizen</span>
          </div>
          <Button
            onClick={() =>
              handleLogin("testercitizenr@gmail.com", "Tester@citizen12345")
            }
            className="mt-2  w-full bg-indigo-500"
            disabled={loginPending}
          >
            {loginPending ? (
              <>
                <Spinner /> submitting
              </>
            ) : (
              "Demo Login"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickDemoLogin;
