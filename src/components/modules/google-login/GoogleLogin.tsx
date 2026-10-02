"use client";

import { useGoogleOAuth } from "@/hooks";
import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function GoogleLoginComponent() {
  const router = useRouter();
  const { mutate: googleLogin } = useGoogleOAuth();

  const handleGoogleSuccess = (credentialResponse: { credential?: string }) => {
    const idToken = credentialResponse.credential;

    if (!idToken) {
      toast.error("Google OAuth Failed");
      return;
    }

    googleLogin(
      { idToken },
      {
        onSuccess: () => {
          toast.success("Logged in Successfully");
          router.push("/");
        },
        onError: (err) => {
          toast.error("Google OAuth Failed");
        },
      },
    );
  };

  const handleGoogleError = () => {
    toast.error("Google OAuth Failed");
  };

  return (
    <GoogleLogin
      theme="outline"
      shape="pill"
      text="continue_with"
      onSuccess={handleGoogleSuccess}
      onError={handleGoogleError}
    />
  );
}
