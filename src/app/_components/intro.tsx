export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <img
          src="/assets/logo/kr.png"
          width={300}
          alt="logo"
          className="select-none pointer-events-none"
        />
      </h1>
      {/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 select-none">
        <a href="https://twitter.com/defnotkevz" target="_blank">
          <span className="underline text-xl mr-4 hover:no-underline cursor-pointer">
            twitter
          </span>
        </a>
        <a href="mailto:kevnroy1@gmail.com" target="_blank">
          <span className="underline text-xl mr-4 hover:no-underline cursor-pointer">
            mail
          </span>
        </a>
        <a href="https://github.com/defnotkevz" target="_blank">
          <span className="underline text-xl mr-4 hover:no-underline cursor-pointer">
            github
          </span>
        </a>
        <a href="https://www.linkedin.com/in/kevnroy/" target="_blank">
          <span className="underline text-xl mr-4 hover:no-underline cursor-pointer">
            linkedIn
          </span>
        </a>
      </h4> */}
    </section>
  );
}
