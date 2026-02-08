import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";

/**
 * Department 2 (SaaS) - Placeholder page for the second department.
 */

export default function Department2Page() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <PageHeader
        title="Department 2"
        breadcrumb="Portfolio › SaaS"
        previousPath="/dashboard/portfolio/saas"
        onSearch={() => {}}
        onAdd={() => {}}
      />
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-gray-500">
        <p className="text-lg font-medium">Department 2</p>
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
