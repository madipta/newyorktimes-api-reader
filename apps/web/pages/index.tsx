import Headline from '../components/headline/headline';

export function Index() {
  return (
    <div className="font-serif">
      <div className="bg-gray-900 tracking-tight py-3">
        <h1 className="text-3xl md:text-4xl text-center text-white font-black mb-2">
          The Washington Post
        </h1>
        <p className="tracking-wide text-sm text-center font-medium italic text-gray-400">
          <a href="https://github.com/madipta/newyorktimes-api-reader">
            source code
          </a>
        </p>
      </div>
      <div className="container bg-gray-50 text-gray-600 px-4 py-8 sm:my-8 mx-auto">
        <p className="text-xl sm:text-2xl tracking-tight leading-none text-gray-700 font-extrabold mb-2">Built with @Nrwl/Nx monorepo</p>
        <p className="text-sm">Frontend: React/NextJS, TailwindCSS</p>
        <p className="text-sm">Backend: NestJs, Redis</p>
      </div>
      <div className="container mx-auto">
        <div className="h-0 border-b border-gray-400"></div>
        <div className="grid grid-cols-12 mt-3">
          <h2 className="col-span-12 uppercase font-sans font-bold text-lg text-gray-800 px-4 md:px-0 mb-4">
            Top Stories
          </h2>
          <div className="col-span-12 md:col-span-3 px-4 md:pl-0">
            <Headline></Headline>
          </div>
          <div className="col-span-12 md:col-span-6 px-4 md:border-l md:border-r md:border-gray-200">
            <Headline></Headline>
          </div>
          <div className="col-span-12 md:col-span-3 px-4 md:pr-0">
            <Headline></Headline>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
