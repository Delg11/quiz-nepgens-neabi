import { useEffect, useState } from 'react'

function ResultScreen({ score, total, percentage, onReturnToMenu }) {
  const [secondsRemaining, setSecondsRemaining] = useState(30)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSecondsRemaining((seconds) => Math.max(0, seconds - 1))
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (secondsRemaining === 0) {
      onReturnToMenu()
    }
  }, [onReturnToMenu, secondsRemaining])

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-green-50 to-red-50 px-4 py-8">
      <div className="w-full max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.08)] md:p-10">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-4xl shadow-inner shadow-green-200">
          {percentage >= 70 ? '🏆' : percentage >= 50 ? '🎯' : '💡'}
        </div>

        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
          Resultado final
        </p>
        <h2 className="mb-6 text-4xl font-black text-slate-800 md:text-5xl">
          Você acertou {percentage}%
        </h2>

        <div className="mb-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-2xl font-bold text-slate-800">
            {score} de {total} questões
          </p>
          <p className="mt-2 text-base text-slate-600">
            {score === total
              ? 'Perfeito! Você dominou o tema.'
              : score >= total * 0.7
                ? 'Muito bom! Você está bem informado(a).'
                : score >= total * 0.5
                  ? 'Bom esforço! Ainda dá para reforçar alguns pontos.'
                  : 'Continue aprendendo e participando dos debates e canais de apoio.'}
          </p>
        </div>

        <section
          aria-labelledby="help-contacts-title"
          className="mb-8 rounded-2xl border border-green-100 bg-green-50 p-5 text-left md:p-6"
        >
          <h3
            id="help-contacts-title"
            className="mb-4 text-lg font-bold text-slate-800 md:text-xl"
          >
            Precisa de ajuda ou quer fazer uma denúncia?
          </h3>
          <div className="grid gap-3 md:grid-cols-3">
            <a
              href="tel:190"
              className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-red-300 focus:outline-none focus:ring-4 focus:ring-red-100"
            >
              <span className="block text-xl font-black text-red-700">190</span>
              <span className="mt-1 block text-sm text-slate-600">
                Emergência policial ou risco imediato.
              </span>
            </a>
            <a
              href="tel:180"
              className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-green-300 focus:outline-none focus:ring-4 focus:ring-green-100"
            >
              <span className="block text-xl font-black text-green-800">180</span>
              <span className="mt-1 block text-sm text-slate-600">
                Central de Atendimento à Mulher: orientação e denúncias de violência contra mulheres.
              </span>
            </a>
            <a
              href="tel:100"
              className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100"
            >
              <span className="block text-xl font-black text-blue-800">Disque 100</span>
              <span className="mt-1 block text-sm text-slate-600">
                Denúncias de violações de direitos humanos.
              </span>
            </a>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            Em uma emergência, procure um local seguro e ligue para o 190.
          </p>
        </section>

        <button
          type="button"
          onClick={onReturnToMenu}
          className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-green-600/20 transition hover:scale-[1.02] hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200"
        >
          Voltar para o menu inicial
        </button>
        <p className="mt-4 text-sm text-slate-500" aria-live="polite">
          Retorno automático ao menu em {secondsRemaining} segundos se ninguém interagir.
        </p>
      </div>
    </main>
  )
}

export default ResultScreen
