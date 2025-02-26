import { ReactNode } from "react";

const DetailsLayout = ({
  backdropPath,
  children,
}: {
  backdropPath: string;
  children: ReactNode;
}) => {
  return (
    <>
      <div className="relative w-full h-[500px] -mt-16">
        <div className="absolute inset-0">
          <img
            src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdropPath}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-100/70 to-base-100" />
        </div>
      </div>
      <div className="mx-auto px-36">
        <div className="grid grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] items-stretch gap-8">
          {children}
        </div>
      </div>
    </>
  );
};

export default DetailsLayout;
