import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6 text-cyan-400">AI Product Video Generator</h1>
      <p className="text-lg mb-10">Upload your products, and AI will create a stunning ad video automatically!</p>
      <Link href="/upload">
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg">
          Upload Product
        </button>
      </Link>
    </div>
  );
}
