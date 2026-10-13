function StartScreen({ onStart }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
        <div className="h-2 bg-green-600" />
        <div className="flex flex-col items-center gap-7 px-6 py-10 text-center md:px-12 md:py-12">
          <img
            src={`${import.meta.env.BASE_URL}ifes-logo.png`}
            alt="Logo IFES"
            className="h-20 w-auto md:h-24"
          />
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-700 md:text-sm">
              Semana Nacional de Ciência e Tecnologia
            </p>
            <h1 className="text-3xl font-black leading-tight text-green-900 md:text-5xl">
              Quiz Interativo: NEPGENS e NEABI
            </h1>
          </div>

          <div className="max-w-2xl space-y-4">
            <p className="text-lg font-medium text-slate-700 md:text-xl">
              Teste seus conhecimentos sobre direitos, prevenção e acolhimento em situações de violência e inclusão.
            </p>
            <p className="text-base text-slate-600">
              Responda às perguntas e descubra quão preparado(a) você está para agir com respeito e segurança.
            </p>
          </div>

          <button
            type="button"
            onClick={onStart}
            className="inline-flex items-center justify-center rounded-xl bg-green-700 px-8 py-4 text-lg font-bold text-white shadow-md shadow-green-900/15 transition hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-200"
          >
            Começar Quiz
          </button>
        </div>
        <footer className="border-t border-slate-200 bg-slate-50 px-6 py-4 text-center text-sm font-medium text-slate-600">
          IFES - Campus de Alegre
        </footer>
      </div>
    </main>
  )
}

export default StartScreen
