import { useRouter } from "next/router";

export default function Preview() {
  const router = useRouter();
  const { videoUrl } = router.query;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Preview Video</h2>
      {videoUrl && (
        <video src={videoUrl} controls className="w-96 rounded-lg shadow-lg" />
      )}
      <a
        href={videoUrl}
        download
        className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg"
      >
        Download Video
      </a>
    </div>
  );
}
