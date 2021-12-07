import Headlines from '../components/headlines/headlines';

export function Index() {
  return (
    <div className="font-serif">
      <div className="bg-gray-900 tracking-tight py-3">
        <h1 className="leading-none text-xl text-center text-white font-black mb-3">
          The New York Times
        </h1>
        <p className="leading-none tracking-wide text-xs text-center italic text-indigo-200">
          <a
            href="https://github.com/madipta/newyorktimes-api-reader"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </p>
      </div>
      <div className="container bg-indigo-50 text-gray-600 px-4 py-8 sm:my-12 mx-auto">
        <p className="text-xl sm:text-2xl tracking-tight text-indigo-900 font-extrabold mb-2">
          Built with @Nrwl/Nx monorepo
        </p>
        <p className="leading-tight font-sans text-sm">
          Frontend: React/NextJS, TailwindCSS
        </p>
        <p className="leading-tight font-sans text-sm">
          Backend: NestJs, Redis
        </p>
        <p className="leading-tight font-sans text-sm">
          By:{' '}
          <a href="https://github.com/madipta" className="text-indigo-800">
            Madipta
          </a>
        </p>
      </div>
      <div className="container mx-auto">
        <div className="h-0 border-b border-gray-400"></div>
        <div className="grid grid-cols-12 mt-3">
          <h2 className="col-span-12 tracking-wider uppercase font-bold px-4 md:px-0 mb-5">
            Top Stories
          </h2>
          <Headlines data={[]}></Headlines>
        </div>
      </div>
    </div>
  );
}

export default Index;
