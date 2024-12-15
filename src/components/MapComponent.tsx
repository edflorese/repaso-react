import useLoadMap from "../hooks/useLoadMap";

export default function MapComponent() {
  const { maps } = useLoadMap();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Valorant's Maps
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {maps.map((Map) => (
            <div key={Map.uuid} className="group relative">
              <img
                src={Map.splash}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    {Map.displayName}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {Map.tacticalDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
