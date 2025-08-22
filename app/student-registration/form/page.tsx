import { notFound } from "next/navigation";
import { client } from "@/api";
import StudentRegistrationForm from "@/components/student-registration/StudentRegistrationForm";
import NacStudyMaterialSection from "@/components/student-registration/NacStudyMaterialSection";

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
