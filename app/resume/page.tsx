export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[32px] border border-slate-800 bg-slate-900/95 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        <h1 className="text-4xl font-semibold tracking-tight">Resume</h1>
        <p className="mt-4 text-sm text-slate-400">
          This page is a placeholder for the resume content. Replace it with your resume details or download link.
        </p>
        <div className="mt-8 space-y-4 text-sm text-slate-300">
          <p><strong>Name:</strong> Tarigopula Sai Shashanth</p>
          <p><strong>Title:</strong> Software Engineer</p>
          <p><strong>Email:</strong> hello@shashanth.dev</p>
          <p><strong>Summary:</strong> Engineer / Builder. I write code that actually ships.</p>
        </div>
      </div>
    </main>
  );
}
