import RegistrationForm from "../../_components/registration";

interface RegisterPageParams {
  courseId: string;
}

export default function RegisterPage({ params }: { params: RegisterPageParams }) {
  return <RegistrationForm courseId={params.courseId} />;
}

import { GetServerSidePropsContext } from "next";

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  return { props: { params } };
}