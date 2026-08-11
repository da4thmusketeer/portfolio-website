import { Reveal } from "@/components/reveal";

export default function Blog() {
  return (
    <main className="relative flex min-h-screen w-full max-w-full items-center justify-center overflow-hidden px-5 py-32 text-center sm:px-10">
      <div className="grain" />
      <div className="orb left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 bg-lilac/25 blur-3xl" />

      <section className="relative mx-auto flex max-w-3xl flex-col items-center justify-center">
        <Reveal>
          <p className="eyebrow text-ink/60">Blog / Writing in progress</p>
          <h1 className="display mt-6 text-[clamp(1.75rem,7vw,4.5rem)] font-black leading-[.9] tracking-tight break-words">
            UNDER<br />
            <span className="text-coral">CONSTRUCTION.</span>
          </h1>
          <p className="mt-8 text-base text-ink/70 sm:text-lg">
            Articles and thoughts are on the way. Check back soon.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
