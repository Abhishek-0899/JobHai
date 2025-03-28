import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BarLoader } from "react-spinners";

const Onboarding = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const handleRoleSection = async (role) => {
    await user
      .update({
        unsafeMetadata: { role },
      })
      .then(() => {
        navigate(role === "recruiter" ? "/postjobs" : "/jobs");
      })
      .catch((err) => {
        console.log("Error updating roles: ", err);
      });
  };

  useEffect(() => {
    // Redirect only if the user has a role and is not already on the onboarding page
    if (user?.unsafeMetadata?.role && location.pathname !== "/onboarding") {
      navigate(user?.unsafeMetadata?.role === "recruiter" ? "/postjobs" : "/jobs");
    }
  }, [user, location, navigate]);

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div className="flex flex-col justify-center items-center mt-30">
      <h2
        className="gradient-title font-extrabold text-7xl sm:text-8xl
    tracking-tight"
      >
        I am a ...
      </h2>
      <div className="mt-16 grid grid-cols-2 gap-4 w-full md:px-40">
        <Button
          onClick={() => handleRoleSection("candidate")}
          variant="blue"
          className="h-36 text-2xl"
        >
          Candidate
        </Button>
        <Button
          onClick={() => handleRoleSection("recruiter")}
          variant="destructive"
          className="h-36 text-2xl"
        >
          Recruiter
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
