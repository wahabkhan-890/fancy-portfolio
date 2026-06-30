"use client";

import { useEffect, useState } from "react";

interface Highlight {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  icon: string;
}

const emptyForm = {
  title: "",
  description: "",
  image: "",
  date: "",
  icon: "",
};

const AdminHighlights = () => {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingHighlight, setEditingHighlight] = useState<Highlight | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  const fetchHighlights = async () => {
    setLoading(true);
    const res = await fetch("/api/highlights");
    const data = await res.json();
    setHighlights(Array.isArray(data) ? data : []);
    setLoading(false);
  };

  useEffect(() => {
    fetchHighlights();
  }, []);

  const openAddForm = () => {
    setEditingHighlight(null);
    setForm(emptyForm);
    setError("");
    setShowForm(true);
  };

  const openEditForm = (highlight: Highlight) => {
    setEditingHighlight(highlight);
    setForm({
      title: highlight.title,
      description: highlight.description,
      image: highlight.image || "",
      date: highlight.date || "",
      icon: highlight.icon || "",
    });
    setError("");
    setShowForm(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const res = await fetch("/api/highlights", {
      method: editingHighlight ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingHighlight ? { id: editingHighlight.id, ...form } : form),
    });

    const result = await res.json();
    if (!res.ok) {
      setError(result.error || "Something went wrong");
      setSaving(false);
      return;
    }

    setShowForm(false);
    fetchHighlights();
    setSaving(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this highlight?")) return;

    const res = await fetch("/api/highlights", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) fetchHighlights();
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSaving(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("bucket", "highlights");

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    if (!res.ok) {
      setError(result.error || "Upload failed");
      setSaving(false);
      return;
    }

    setForm({ ...form, image: result.url });
    setSaving(false);
  };

  const inputClass =
    "mb-2 w-full rounded-xl border border-violet-500/30 bg-white px-4 py-2 text-sm text-zinc-900 outline-none transition focus:border-violet-500 dark:bg-white/5 dark:text-white";

  if (loading) return <p className="text-zinc-500 dark:text-zinc-400">Loading highlights...</p>;

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-violet-500">Highlights</h1>
        <button
          onClick={openAddForm}
          className="rounded-xl bg-violet-500 px-4 py-2 text-sm font-medium text-white hover:bg-violet-600 transition"
        >
          + Add Highlight
        </button>
      </div>

      <div className="mt-6 space-y-3">
        {highlights.length === 0 ? (
          <p className="text-zinc-500 dark:text-zinc-400">No highlights yet.</p>
        ) : (
          highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="flex items-center justify-between rounded-xl border border-violet-500/20 bg-white p-4 shadow-sm dark:bg-[#0d0a17] dark:border-violet-900/40"
            >
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {highlight.icon} {highlight.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{highlight.date}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => openEditForm(highlight)}
                  className="rounded-lg bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-600 hover:bg-yellow-500/20 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(highlight.id)}
                  className="rounded-lg bg-red-500/10 px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-500/20 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <form
            onSubmit={handleSave}
            className="w-full max-w-lg rounded-2xl border border-violet-500/20 bg-white p-6 shadow-2xl dark:bg-[#0d0a17] dark:border-violet-900/40"
          >
            <h2 className="mb-4 text-xl font-bold text-violet-500">
              {editingHighlight ? "Edit Highlight" : "Add Highlight"}
            </h2>

            <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className={inputClass} required />
            <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className={`${inputClass} resize-none`} rows={3} required />
            
            <input placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className={inputClass} />

            {/* ── IMAGE UPLOAD ── */}
            <div className="mb-2">
              <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-2 w-full rounded-xl border border-violet-500/30 bg-white px-4 py-2 text-sm text-zinc-700 outline-none dark:bg-white/5 dark:text-zinc-300" />
              {form.image && <p className="mb-2 text-xs text-green-500">✅ Image uploaded!</p>}
            </div>

            <input placeholder="Date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputClass} />
            <input placeholder="Icon (emoji)" value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })} className={inputClass} />

            {error && <p className="mb-3 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-500">{error}</p>}

            <div className="mt-4 flex justify-end gap-2">
              <button type="button" onClick={() => setShowForm(false)} className="rounded-xl border border-violet-500/30 px-4 py-2 text-sm text-violet-500 hover:bg-violet-500/10 transition">Cancel</button>
              <button type="submit" disabled={saving} className="rounded-xl bg-violet-500 px-4 py-2 text-sm font-medium text-white hover:bg-violet-600 disabled:opacity-50 transition">
                {saving ? "Saving..." : editingHighlight ? "Update" : "Create"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminHighlights;