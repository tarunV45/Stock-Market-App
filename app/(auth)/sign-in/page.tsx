"use client";

import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import { signInWithEmail } from "@/lib/actions/auth.actions";
import { sign } from "crypto";
import { register } from "module";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const SignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (
    data: SignInFormData
  ) => {
    try {
      const res = await signInWithEmail(data);
      if(res.success) router.push('/');
    } catch (error) {
      console.log(error);
      toast.error('Sign in failed. Please try again.',{
        description: error instanceof Error ? error.message : 'Failed to sign in.',
      });
    }
  };

  return (
    <>
      <h1 className="form-title">Sign In Page</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <InputField
          name="email"
          label="Email"
          placeholder="Enter your email"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          }}
        />

        <InputField
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          register={register}
          error={errors.password}
          validation={{
            required: "Password is required",
            minlength: 8,
          }}
        />

        <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
          {isSubmitting
            ? "Signing In..."
            : "Sign In"}
        </Button>

        <FooterLink text="Don't have an account?" linkText="Create Account" href="/sign-up" />
      </form>
    </>
  );
};

export default SignIn;
