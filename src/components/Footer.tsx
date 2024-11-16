
export default function Footer() {
  return (
    <footer className="flex md:flex-row flex-col md:justify-between px-10 pb-12 md:px-28 md:py-8 gap-10 md:gap-0">
      <h1 className="font-semibold md:font-normal text-3xl">StagePass</h1>
      <div className="flex flex-col md:flex-row gap-5 md:gap-20 text-2xl md:px-10">
        <div>
          <p>+234-333-333</p>
          <p>info@mysite.com</p>
        </div>
        <div>
          <p>ATC, Jalingo 660213,</p>
          <p>Taraba, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
