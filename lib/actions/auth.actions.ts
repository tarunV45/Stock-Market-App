"use server";

import { headers } from "next/headers";
import { auth } from "../better-auth/auth";
import { inngest } from "../Inngest/client";

export const signUpWithEmail = async (
  data: SignUpFormData,
) => {
  try {
    const response = await auth.api.signUpEmail({
      body: {
        email: data.email,
        password: data.password,
        name: data.fullName,
      },
    });
    console.log(response);
    if (response) {
      await inngest.send({
        name: "app/user.created",
        data: {
          email: data.email,
          name: data.fullName,
          country: data.country,
          investmentGoals: data.investmentGoals,
          riskTolerance: data.riskTolerance,
          preferredIndustry: data.preferredIndustry,
        },
      });
      return { success: true, data: response };
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: 'error' };
  }
};

export const signInWithEmail = async({email, password}: SignInFormData)=>{
    try {
    const response = await auth.api.signInEmail({
      body: {
        email: email,
        password: password,
      },
    });
    console.log(response);
    return {success: true, data: response};
  } catch (error) {
    console.log('sign in failed', error);
    return {success: false, message: 'sign in failed'}
  }
};


export const signOut = async () => {
  try {
    await auth.api.signOut({headers: await headers()});
  } catch (error) {
    console.log(error);
    return { success: false, message: 'error' };
  }
}
