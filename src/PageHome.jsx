import Header from "./components/Header";
// import HeroImage from "./assets/img/hero-image-simple-homepage.png";
import HeroImage2x from "./assets/img/hero-image-simple-homepage@2x.png";
import CheckLight from "./assets/svg/Done_ring_round_fill.svg";

const PageHome = () => {
  return (
    <>
      <Header />

      <main className="px-4">
        <section>
          <div className="mt-4">
            <img src={HeroImage2x} alt="hero-image" className="mx-auto h-64" />
          </div>

          <article className="mt-7">
            <span className="text-primary font-semibold uppercase">
              😎 Simple way to communicate
            </span>

            <h1 className="text-primary my-5 text-balance text-5xl font-bold leading-snug">
              Actions for Accessibility in Design
            </h1>

            <p className="text-secondary mb-6 mt-8 text-balance text-lg font-medium">
              The fastest way to build and deploy websites with reusable
              components.
            </p>

            <div className="space-x-10">
              <button className="bg-button text-normal hover:bg-button/90 rounded-xl px-8 py-3 font-medium text-white">
                GET STARTED
              </button>
              <button className="text-button hover:text-button/90 font-semibold underline decoration-2 underline-offset-8">
                Get live demo
              </button>
            </div>

            <footer className="text-secondary my-8 flex gap-4 text-sm font-medium">
              <div className="inline-flex items-center gap-1">
                <img src={CheckLight} alt="check" className="size-6" />
                <span>No credit card required</span>
              </div>

              <div className="inline-flex items-center gap-1">
                <img src={CheckLight} alt="check" className="size-6" />
                <span>No software to install</span>
              </div>
            </footer>
          </article>
        </section>
      </main>
    </>
  );
};

export default PageHome;
