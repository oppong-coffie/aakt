import { useState } from "react";
import { Link } from "react-router-dom";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "active" | "completed" | "cancelled";
}

interface Workload {
  id: string;
  title: string;
  tasks: Task[];
}

const Homepage = () => {
  const [workloads, setWorkloads] = useState<Workload[]>([
    {
      id: "1",
      title: "Today",
      tasks: [],
    },
  ]);

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isWorkloadModalOpen, setIsWorkloadModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const [activeWorkloadId, setActiveWorkloadId] = useState<string | null>(null);
  const [selectedTask, setSelectedTask] = useState<{
    workloadId: string;
    task: Task;
  } | null>(null);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newWorkloadTitle, setNewWorkloadTitle] = useState("");
  const [editingTaskTitle, setEditingTaskTitle] = useState("");

  const handleAddWorkload = () => {
    if (!newWorkloadTitle.trim() || !newTaskTitle.trim()) return;
    const newWorkload: Workload = {
      id: Date.now().toString(),
      title: newWorkloadTitle,
      tasks: [
        {
          id: (Date.now() + 1).toString(),
          title: newTaskTitle,
          description: "",
          status: "active",
        },
      ],
    };
    setWorkloads([...workloads, newWorkload]);
    setNewWorkloadTitle("");
    setNewTaskTitle("");
    setIsWorkloadModalOpen(false);
  };

  const handleAddTask = () => {
    if (!newTaskTitle.trim() || !activeWorkloadId) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: newTaskTitle,
      description: "",
      status: "active",
    };
    setWorkloads(
      workloads.map((w) =>
        w.id === activeWorkloadId ? { ...w, tasks: [...w.tasks, newTask] } : w,
      ),
    );
    setNewTaskTitle("");
    setIsTaskModalOpen(false);
    setActiveWorkloadId(null);
  };

  const handleUpdateTaskStatus = (
    workloadId: string,
    taskId: string,
    status: "active" | "completed" | "cancelled",
  ) => {
    setWorkloads(
      workloads.map((w) =>
        w.id === workloadId
          ? {
              ...w,
              tasks: w.tasks.map((t) =>
                t.id === taskId ? { ...t, status } : t,
              ),
            }
          : w,
      ),
    );
    setIsDetailModalOpen(false);
  };

  const handleRemoveTask = (workloadId: string, taskId: string) => {
    setWorkloads(
      workloads.map((w) =>
        w.id === workloadId
          ? { ...w, tasks: w.tasks.filter((t) => t.id !== taskId) }
          : w,
      ),
    );
    setIsDetailModalOpen(false);
  };

  const handleEditTask = () => {
    if (!selectedTask || !editingTaskTitle.trim()) return;
    setWorkloads(
      workloads.map((w) =>
        w.id === selectedTask.workloadId
          ? {
              ...w,
              tasks: w.tasks.map((t) =>
                t.id === selectedTask.task.id
                  ? { ...t, title: editingTaskTitle }
                  : t,
              ),
            }
          : w,
      ),
    );
    setIsDetailModalOpen(false);
  };

  return (
    <div className="p-6">
      {/* Kanban Board Area */}
      <div className="flex items-start gap-6 overflow-x-auto pb-4">
        {workloads.map((workload) => (
          <div
            key={workload.id}
            className="w-64 shrink-0 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col min-h-[150px]"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800">{workload.title}</h3>
              <button className="text-gray-400 hover:text-gray-600">•••</button>
            </div>

            <div className="flex flex-col gap-2 mb-4">
              {workload.tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => {
                    setSelectedTask({ workloadId: workload.id, task });
                    setEditingTaskTitle(task.title);
                    setIsDetailModalOpen(true);
                  }}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    task.status === "completed"
                      ? "bg-green-50 border-green-100"
                      : task.status === "cancelled"
                        ? "bg-red-50 border-red-100 opacity-60"
                        : "bg-gray-50 border-gray-100 hover:border-blue-200 hover:shadow-sm"
                  }`}
                >
                  <p
                    className={`text-sm font-medium ${
                      task.status === "completed"
                        ? "text-green-700 line-through"
                        : task.status === "cancelled"
                          ? "text-red-700"
                          : "text-gray-700"
                    }`}
                  >
                    {task.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-2 border-t border-gray-50">
              <button
                onClick={() => {
                  setActiveWorkloadId(workload.id);
                  setIsTaskModalOpen(true);
                }}
                className="flex items-center gap-2 text-gray-500 hover:text-blue-600 text-sm font-medium transition-colors w-full"
              >
                <span className="text-lg leading-none">+</span> Add new task
              </button>
            </div>
          </div>
        ))}

        {/* Add New List Button */}
        <div className="shrink-0 pt-1">
          <button
            onClick={() => setIsWorkloadModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 pr-9 bg-white rounded-lg shadow-sm border border-gray-100 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
          >
            <span>+</span> Add new workload
          </button>
        </div>
      </div>

      {/* Add Task Modal */}
      {isTaskModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h3 className="text-xl font-bold mb-4">Add New Task</h3>
            <input
              type="text"
              placeholder="Task name"
              className="w-full p-3 rounded-xl border border-gray-200 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              autoFocus
            />
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setIsTaskModalOpen(false);
                  setNewTaskTitle("");
                }}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTask}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Workload Modal */}
      {isWorkloadModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h3 className="text-xl font-bold mb-2">Add New Workload</h3>
            <p className="text-gray-500 text-sm mb-4">
              Create a new column and its first task.
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">
                  Workload Title
                </label>
                <input
                  type="text"
                  placeholder="e.g., Marketing, Backlog"
                  className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newWorkloadTitle}
                  onChange={(e) => setNewWorkloadTitle(e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">
                  First Task
                </label>
                <input
                  type="text"
                  placeholder="Task name"
                  className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  setIsWorkloadModalOpen(false);
                  setNewWorkloadTitle("");
                  setNewTaskTitle("");
                }}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddWorkload}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Task Detail Modal (Edit/Complete/Cancel/Remove) */}
      {isDetailModalOpen && selectedTask && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Manage Task</h3>
              <button
                onClick={() => setIsDetailModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {selectedTask.task.status === "cancelled" ? (
              <div className="mb-6">
                <p className="text-gray-600 mb-4 font-medium">
                  This task has been cancelled. Would you like to remove it?
                </p>
                <button
                  onClick={() =>
                    handleRemoveTask(
                      selectedTask.workloadId,
                      selectedTask.task.id,
                    )
                  }
                  className="w-full px-4 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  Remove Task
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">
                    Edit Title
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                    value={editingTaskTitle}
                    onChange={(e) => setEditingTaskTitle(e.target.value)}
                  />
                  <button
                    onClick={handleEditTask}
                    className="mt-2 text-sm text-blue-600 font-bold hover:underline"
                  >
                    Save Changes
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  {selectedTask.task.status !== "completed" && (
                    <button
                      onClick={() =>
                        handleUpdateTaskStatus(
                          selectedTask.workloadId,
                          selectedTask.task.id,
                          "completed",
                        )
                      }
                      className="w-full px-4 py-2 border-2 border-green-600 text-green-600 rounded-xl font-bold hover:bg-green-50 transition-colors"
                    >
                      Mark as Completed
                    </button>
                  )}
                  {selectedTask.task.status === "completed" && (
                    <button
                      onClick={() =>
                        handleUpdateTaskStatus(
                          selectedTask.workloadId,
                          selectedTask.task.id,
                          "active",
                        )
                      }
                      className="w-full px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                    >
                      Re-open Task
                    </button>
                  )}
                  <button
                    onClick={() =>
                      handleUpdateTaskStatus(
                        selectedTask.workloadId,
                        selectedTask.task.id,
                        "cancelled",
                      )
                    }
                    className="w-full px-4 py-2 border-2 border-red-200 text-red-600 rounded-xl font-bold hover:bg-red-50 transition-colors"
                  >
                    Cancel Task
                  </button>
                </div>
              </>
            )}

            <button
              onClick={() => setIsDetailModalOpen(false)}
              className="w-full mt-4 px-4 py-2 text-gray-400 font-semibold hover:text-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Finish Setup Card */}
      <div className="mt-20 lg:mt-68 w-[92%] bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-900 text-lg mb-1">
          Finish setting up your account
        </h3>
        <div className="bg-gray-200 h-[2px] mt-2"></div>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-gray-400 text-sm">
              Things that you have missed should be filled.
            </p>
          </div>
          <Link to="finish">
            <button className="px-6 py-1 mr-5 mt-2 rounded-full border border-blue-600 text-gray-900 text-sm font-semibold hover:bg-blue-50 transition-colors">
              Finish It
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
