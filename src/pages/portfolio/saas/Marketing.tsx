import { useLocation, useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";

/**
 * Marketing (SaaS) - Department 1 / Department 2 marketing view.
 */

export default function MarketingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isDept2 = location.pathname.includes("/department2/");
  const deptLabel = isDept2 ? "Department 2" : "Department 1";
  const deptPath = isDept2
    ? "/dashboard/portfolio/saas/department2"
    : "/dashboard/portfolio/saas/department1";

  return (
    <PageLayout>
      <PageHeader
        breadcrumbs={[
          { label: "Portfolio", to: "/dashboard/portfolio" },
          { label: "SaaS", to: "/dashboard/portfolio/saas" },
          { label: deptLabel, to: deptPath },
          { label: "Marketing", to: location.pathname },
        ]}
        onSearch={() => {}}
        onAdd={() => {}}
      />
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-gray-500">
        <p className="text-lg font-medium">Marketing</p>
        <p className="text-sm mt-1">Content can be added here.</p>
        <button
          type="button"
          onClick={() => navigate("/dashboard/portfolio/saas")}
          className="mt-4 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          Back to SaaS
        </button>
      </div>
    </PageLayout>
  );
}
