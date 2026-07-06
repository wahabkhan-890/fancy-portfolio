"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/types";

const emptyForm = {
  title: "",
  description: "",
  image: "",
  tech: "",
  category: "",
   type: "", 
  preview: "",
  github: "",
};

const AdminProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/projects");
      const data: unknown = await res.json();

      if (!res.ok) {
        throw new Error("Unable to load projects");
      }

      setProjects(Array.isArray(data) ? (data as Project[]) : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load projects");
      setProjects([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    const loadProjects = async () => {
      await fetchProjects();
    };

    loadProjects();
  }, []);

  const openAddForm = () => {
    setEditingProject(null);
    setForm(emptyForm);
    setError("");
    setShowForm(true);
  };

  const openEditForm = (project: Project) => {
    setEditingProject(project);
    setForm({
      title: project.title,
      description: project.description,
      image: project.image || "",
      tech: project.tech || "",
      category: project.category || "",
      type: project.type || "",
      preview: project.preview || "",
      github: project.github || "",
    });
    setError("");
    setShowForm(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const res = await fetch("/api/projects", {
      method: editingProject ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingProject ? { id: editingProject.id, ...form } : form),
    });

    const result = await res.json();
    if (!res.ok) {
      setError(result.error || "Something went wrong");
      setSaving(false);
      return;
    }

    setShowForm(false);
    fetchProjects();
    setSaving(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this project? This cannot be undone.")) return;

    const res = await fetch("/api/projects", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      fetchProjects();
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSaving(true);
    setError("");

    // Upload via server API route — uses service role key, no RLS issues
    const formData = new FormData();
    formData.append("file", file);
    formData.append("bucket", "projects");

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (!res.ok) {
      setError("Upload failed: " + (result.error || "Unknown error"));
      setSaving(false);
      return;
    }

    setForm((prev) => ({ ...prev, image: result.url }));
    setSaving(false);
  };

  const inputClass =
    "mb-2 w-full rounded-xl border border-primary/30 bg-white px-4 py-2 text-sm text-zinc-900 outline-none transition focus:border-primary dark:bg-white/5 dark:text-white";

  if (loading) return <p className="text-zinc-500 dark:text-zinc-400">Loading projects...</p>;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary">Projects</h1>
        <button
          onClick={openAddForm}
          className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover transition"
        >
          + Add Project
        </button>
      </div>

      {/* Project List */}
      <div className="mt-6 space-y-3">
        {projects.length === 0 ? (
          <p className="text-zinc-500 dark:text-zinc-400">No projects yet.</p>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between rounded-xl border border-primary/20 bg-white p-4 shadow-sm dark:bg-[#0d0a17] dark:border-primary/40"
            >
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">{project.title}</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{project.category}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => openEditForm(project)}
                  className="rounded-lg bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-600 hover:bg-yellow-500/20 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="rounded-lg bg-red-500/10 px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-500/20 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <form
            onSubmit={handleSave}
            className="w-full max-w-lg rounded-2xl border border-primary/20 bg-white p-6 shadow-2xl dark:bg-[#0d0a17] dark:border-primary/40"
          >
            <h2 className="mb-4 text-xl font-bold text-primary">
              {editingProject ? "Edit Project" : "Add Project"}
            </h2>

            <input
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className={inputClass}
              required
            />
            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className={`${inputClass} resize-none`}
              rows={3}
              required
            />
            <input
              placeholder="Image URL"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className={inputClass}
            />

            {/* ── IMAGE UPLOAD ── */}
            <div className="mb-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mb-2 w-full rounded-xl border border-primary/30 bg-white px-4 py-2 text-sm text-zinc-700 outline-none dark:bg-white/5 dark:text-zinc-300"
              />
              {form.image && (
                <p className="mb-2 text-xs text-green-500">✅ Image uploaded!</p>
              )}
            </div>

            <input
              placeholder="Tech Stack (comma separated)"
              value={form.tech}
              onChange={(e) => setForm({ ...form, tech: e.target.value })}
              className={inputClass}
            />
            <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className={inputClass}>
              <option value="">Select Level</option>
  <option value="Top">⭐ Top</option>
  <option value="Mid">📊 Mid</option>
  <option value="Low">📌 Low</option>
</select>
            
            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className={inputClass} required>
  <option value="">Select Type</option>
  <option value="All">🌐 All</option>
  <option value="Frontend">🎨 Frontend</option>
  <option value="Backend">⚙️ Backend</option>
  <option value="Full Stack">🔧 Full Stack</option>
</select>
            <input
              placeholder="Preview URL"
              value={form.preview}
              onChange={(e) => setForm({ ...form, preview: e.target.value })}
              className={inputClass}
            />
            <input
              placeholder="GitHub URL"
              value={form.github}
              onChange={(e) => setForm({ ...form, github: e.target.value })}
              className={inputClass}
            />

            {error && (
              <p className="mb-3 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-500">
                {error}
              </p>
            )}

            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-xl border border-primary/30 px-4 py-2 text-sm text-primary hover:bg-primary/10 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover disabled:opacity-50 transition"
              >
                {saving ? "Saving..." : editingProject ? "Update" : "Create"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminProjects;
