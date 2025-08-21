import { notFound } from "next/navigation";
import { client } from "@/api";
import StudentRegistrationForm from "@/components/student-registration/StudentRegistrationForm";

interface PageProps {
  searchParams: { schoolId?: string };
}

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

  return <StudentRegistrationForm school={school?.data as any} />;
}
