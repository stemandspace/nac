import { notFound } from "next/navigation";
import { client } from "@/api";
import StudentRegistrationForm from "@/components/student-registration/StudentRegistrationForm";

interface PageProps {
  searchParams: { schoolId?: string };
}

async function getSchoolData(schoolId: string) {
  try {
    const response = await client.collection("schools").findOne(schoolId);
    if (response?.data) {
      return {
        id: response.data.id,
        ...response.data.attributes,
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching school:", error);
    return null;
  }
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
