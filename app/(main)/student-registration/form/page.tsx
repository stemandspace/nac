import { client } from "@/api";
import { notFound } from "next/navigation";
import StudentRegistrationForm from "@/components/student-registration/StudentRegistrationForm";
import NacStudyMaterialSection from "@/components/student-registration/NacStudyMaterialSection";
import RegistrationClosed from "@/components/RegistrationClosed";
import { registrationConfig } from "@/config/registration";

interface PageProps {
  searchParams: { schoolId?: string };
}

const registrationFee = {
  price: 12,
  priceInr: 500,
};

const schoolRegistrationFee = {
  price: 10,
  priceInr: 300,
};

export default async function StudentRegistrationPage({
  searchParams,
}: PageProps) {
  // Check if registration is closed
  if (!registrationConfig.isOpen) {
    return <RegistrationClosed title="Student Registration Closed" />;
  }

  const { schoolId } = searchParams;

  let school = null;

  if (schoolId) {
    school = await client.collection("schools").findOne(schoolId);
    if (!school) {
      notFound();
    }
  }

  return (
    <>
      <StudentRegistrationForm
        school={school?.data as any}
        registrationFee={school ? schoolRegistrationFee : registrationFee}
      />
      <NacStudyMaterialSection />
    </>
  );
}
