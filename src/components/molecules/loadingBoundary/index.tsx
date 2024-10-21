import { Suspense, ReactNode } from "react";
import Loading from "../../atoms/loading";

const LoadingBoundary = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  );
};

export default LoadingBoundary;
