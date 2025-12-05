// components/Testimonials.tsx
"use client";
import { useEffect, useState } from "react";

type Testimonial = {
  id: number;
  name: string;
  message: string;
  rating?: number;
  date?: string;
};

export default function Testimonials() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState<number>(5);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((r) => r.json())
      .then((d) => setItems(d.data || []))
      .catch(console.error);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message, rating })
      });
      const data = await res.json();
      if (data.success) {
        setItems((prev) => [data.data, ...prev]);
        setName("");
        setMessage("");
        setRating(5);
      } else {
        alert("Error adding testimonial");
      }
    } catch (err) {
      console.error(err);
      alert("Request failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="p-6 bg-black rounded-lg text-white placeholder-white">
      <h2 className="text-2xl font-bold mb-4">What people say</h2>

      <form onSubmit={handleSubmit} className="mb-6 grid gap-2">
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" className="p-2 border rounded" />
        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Write a short review" className="p-2 border rounded" />
        <div className="flex gap-2 items-center">
          <label>Rating</label>
          <select value={rating} onChange={(e)=>setRating(Number(e.target.value))} className="p-2 border rounded">
            {[5,4,3,2,1].map(r=> <option key={r} value={r}>{r}</option>)}
          </select>
          <button type="submit" disabled={loading} className="ml-auto px-3 py-1 bg-blue-600 text-white rounded">
            {loading ? "Adding..." : "Add Review"}
          </button>
        </div>
      </form>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map(item => (
          <div key={item.id} className="p-4 bg-white rounded shadow">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-black">{item.name}</h3>
              <div className="text-yellow-500">{Array(item.rating||5).fill("⭐").join("")}</div>
            </div>
            <p className="mt-2 text-gray-700">{item.message}</p>
            <div className="mt-2 text-xs text-gray-400">{item.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
