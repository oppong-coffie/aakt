import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

/**
 * Homepage - A fully interactive task management dashboard.
 * Supports adding workload columns, adding tasks, and managing tasks via dropdowns.
 */

// --- Icons ---

const PlusIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const MoreIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="19" cy="12" r="1"></circle>
    <circle cx="5" cy="12" r="1"></circle>
  </svg>
);

const CheckIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// --- Components ---

const TaskItem = ({
  task,
  onToggle,
  onDelete,
  onEdit,
}: {
  task: any;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (newText: string) => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEditSubmit = () => {
    onEdit(editText);
    setIsEditing(false);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative group flex items-center justify-between gap-3 p-1 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3 flex-1 overflow-hidden">
        <div
          onClick={onToggle}
          className={`shrink-0 w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center cursor-pointer ${
            task.completed
              ? "bg-blue-600 border-blue-600"
              : "border-gray-200 hover:border-blue-400"
          }`}
        >
          {task.completed && <CheckIcon />}
        </div>

        {isEditing ? (
          <input
            autoFocus
            className="flex-1 bg-white border border-blue-300 rounded px-1 py-0.5 text-sm outline-none"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEditSubmit}
            onKeyDown={(e) => e.key === "Enter" && handleEditSubmit()}
          />
        ) : (
          <span
            className={`text-sm font-medium truncate ${task.completed ? "text-gray-400 line-through" : "text-gray-700"}`}
          >
            {task.text}
          </span>
        )}
      </div>

      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white rounded-md border border-transparent hover:border-gray-100"
        >
          <MoreIcon />
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -5 }}
              className="absolute right-0 top-full mt-1 w-28 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-20"
            >
              <button
                onClick={() => {
                  setIsEditing(true);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  onToggle();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {task.completed ? "Undo Task" : "Complete"}
              </button>
              <button
                onClick={() => {
                  onDelete();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors"
              >
                Delete
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Homepage = () => {
  const [workloads, setWorkloads] = useState([
    {
      id: "today",
      title: "Today",
      tasks: [
        { id: 1, text: "Review business infrastructure", completed: false },
        { id: 2, text: "Update portfolio metrics", completed: false },
      ],
    },
    { id: "later", title: "Later", tasks: [] },
  ]);

  const addWorkload = () => {
    const newId = Date.now().toString();
    setWorkloads([
      ...workloads,
      { id: newId, title: "New Workload", tasks: [] },
    ]);
  };

  const deleteWorkload = (workloadId: string) => {
    setWorkloads(workloads.filter((w) => w.id !== workloadId));
  };

  const addTask = (workloadId: string) => {
    const taskText = prompt("Enter task title:");
    if (!taskText) return;

    setWorkloads(
      workloads.map((w) => {
        if (w.id === workloadId) {
          return {
            ...w,
            tasks: [
              ...w.tasks,
              { id: Date.now(), text: taskText, completed: false },
            ],
          };
        }
        return w;
      }),
    );
  };

  const toggleTask = (workloadId: string, taskId: number) => {
    setWorkloads(
      workloads.map((w) => {
        if (w.id === workloadId) {
          return {
            ...w,
            tasks: w.tasks.map((t: any) =>
              t.id === taskId ? { ...t, completed: !t.completed } : t,
            ),
          };
        }
        return w;
      }),
    );
  };

  const deleteTask = (workloadId: string, taskId: number) => {
    setWorkloads(
      workloads.map((w) => {
        if (w.id === workloadId) {
          return {
            ...w,
            tasks: w.tasks.filter((t: any) => t.id !== taskId),
          };
        }
        return w;
      }),
    );
  };

  const editTask = (workloadId: string, taskId: number, newText: string) => {
    setWorkloads(
      workloads.map((w) => {
        if (w.id === workloadId) {
          return {
            ...w,
            tasks: w.tasks.map((t: any) =>
              t.id === taskId ? { ...t, text: newText } : t,
            ),
          };
        }
        return w;
      }),
    );
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col gap-12">
      {/* Top Action & Workloads Grid */}
      <div className="flex flex-wrap gap-6 items-start">
        <AnimatePresence>
          {workloads.map((workload, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              key={workload.id}
              className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col gap-4 min-h-[180px] w-full max-w-[280px]"
            >
              <div className="flex justify-between items-center px-1">
                <input
                  className="font-bold text-gray-800 text-lg bg-transparent border-none outline-none w-32 focus:bg-gray-50 rounded px-1 transition-colors"
                  value={workload.title}
                  onChange={(e) => {
                    setWorkloads(
                      workloads.map((w) =>
                        w.id === workload.id
                          ? { ...w, title: e.target.value }
                          : w,
                      ),
                    );
                  }}
                />
                <button
                  onClick={() => deleteWorkload(workload.id)}
                  className="p-1 hover:bg-gray-50 rounded-lg transition-colors group"
                >
                  <MoreIcon />
                </button>
              </div>

              <div className="flex-1 flex flex-col gap-1">
                {workload.tasks.length > 0 ? (
                  workload.tasks.map((task: any) => (
                    <TaskItem
                      key={task.id}
                      task={task}
                      onToggle={() => toggleTask(workload.id, task.id)}
                      onDelete={() => deleteTask(workload.id, task.id)}
                      onEdit={(text) => editTask(workload.id, task.id, text)}
                    />
                  ))
                ) : (
                  <span className="text-gray-400 text-sm px-1 italic">
                    No tasks yet
                  </span>
                )}
              </div>

              <button
                onClick={() => addTask(workload.id)}
                className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors text-sm font-semibold px-1 mt-2"
              >
                <PlusIcon size={14} />
                <span>Add new task</span>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Dynamic Add Workload Button */}
        <motion.button
          layout
          onClick={addWorkload}
          className="bg-white px-8 py-4 rounded-[1.5rem] shadow-sm border border-gray-100 flex items-center gap-3 text-gray-800 font-bold text-sm hover:shadow-md transition-all h-[56px] shrink-0"
        >
          <PlusIcon className="text-gray-400" />
          <span>Add new workload</span>
        </motion.button>

        {/* Floating Detail */}
        <div className="fixed bottom-24 right-12 w-16 h-16 rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_0_40px_rgba(59,130,246,0.5)] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform z-10">
          <div className="w-14 h-14 rounded-full bg-linear-to-br from-transparent to-black/10"></div>
        </div>
      </div>

      {/* Account Setup Banner */}
      <div className="mt-auto mb-32 w-full">
        <motion.div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Finish setting up your account
            </h3>
            <p className="text-gray-400 text-sm">
              Things that you have missed should be filled.
            </p>
          </div>

          <Link
            to="finish"
            className="px-10 py-3 border border-blue-600 text-blue-600 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            Finish It
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
