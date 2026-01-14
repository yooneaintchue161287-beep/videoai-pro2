import { useState } from "react";
import { useRouter } from "next/router";

export default function Upload() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleUpload = async () => {
    // Simulate sending data to backend
    const response = await fetch("/api/generateVideo", {
      method: "POST",
      body: JSON.stringify({ image, description }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    router.push(`/preview?videoUrl=${data.videoUrl}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Upload Product</h2>
      <input type="file" onChange={e => setImage(e.target.files[0])} className="mb-4" />
      <textarea
        placeholder="Product description..."
        className="mb-4 p-2 text-black w-96"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button
        onClick={handleUpload}
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg"
      >
        Generate Video
      </button>
    </div>
  );
}
