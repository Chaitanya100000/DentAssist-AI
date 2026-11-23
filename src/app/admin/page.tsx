import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AdminDashboardClient from "./AdminDashboardClient";

async function AdminPage() {
  const user = await currentUser();

  // Redirect to the home page if the user is not logged in
  if (!user) redirect ("/");

  const adminEmail = process.env.ADMIN_EMAIL; 
  const userEmail = user.emailAddresses[0]?.emailAddress;

  // Check if the user is not an admin and redirect to the home page
  if (!adminEmail || userEmail !== adminEmail) redirect("/dashboard");

  return <AdminDashboardClient />;
}

export default AdminPage;
