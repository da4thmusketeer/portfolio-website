import { Reveal } from "@/components/reveal";

export default function Contact() {
  return (
    <main className="relative flex min-h-[calc(100vh-12rem)] w-full max-w-full items-center overflow-hidden px-5 py-32 sm:px-10">
      <div className="grain" />
      <div className="orb right-[-9rem] top-[20%] h-96 w-96 bg-coral" />
      <section className="relative mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="eyebrow">Contact / Let’s make it real</p>
          <h1 className="display mt-7 text-[clamp(2.5rem,10.5vw,9vw)] font-black leading-[.78] break-words">
            START A<br />
            <i className="font-normal text-lilac">CONVERSATION.</i>
          </h1>
        </Reveal>
        <Reveal
          delay={0.12}
          className="mt-16 grid gap-10 border-t line pt-6 md:grid-cols-2"
        >
          <a
            href="mailto:kwakuanor18@gmail.com"
            className="display text-lg text-nowrap font-black break-all transition-colors hover:text-coral sm:text-xl md:text-2xl"
          >
            kwakuanor18@gmail.com ↗
          </a>
          <div>
            <p className="max-w-sm text-sm leading-6">
              Have a project, a wild thought, or just a good recommendation?
              Send a note.
            </p>
            <div className="mt-8 flex gap-5 eyebrow">
              <a href="https://github.com/da4thmusketeer">Github</a>
              <a href="https://www.linkedin.com/in/kelvin-donkor/">LinkedIn</a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
