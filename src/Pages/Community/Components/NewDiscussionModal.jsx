import React from "react";

export default function NewDiscussionModal({ allTags, form, setForm, onClose, onSubmit }) {
  function toggleFormTag(tag) {
    setForm((f) => ({ ...f, tags: f.tags.includes(tag) ? f.tags.filter((t) => t !== tag) : [...f.tags, tag] }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">New Discussion</h2>
          <button onClick={onClose} className="text-gray-500">Close</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Title</label>
            <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              className="w-full border-2 border-purple-300 rounded-md px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600">Author</label>
              <input value={form.author} onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))}
                className="w-full border-2 border-purple-300 rounded-md px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
            </div>

            <div>
              <label className="block text-sm text-gray-600">Category</label>
              <input value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                className="w-full border-2 border-purple-300 rounded-md px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600">Tags (pick)</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {allTags.map((t) => (
                <button key={t} type="button" onClick={() => toggleFormTag(t)}
                  className={`px-3 py-1 rounded-full text-sm border transition-all ${form.tags.includes(t) ? "bg-purple-600 text-white border-purple-600" : "bg-white text-purple-700 border-purple-300 hover:border-purple-500"}`}>
                  #{t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600">Content</label>
            <textarea value={form.content} onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
              className="w-full border-2 border-purple-300 rounded-md px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent h-28" />
          </div>

          <div className="flex items-center justify-end gap-3">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-gray-900 text-white rounded">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
