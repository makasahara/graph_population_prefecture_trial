import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Error from "../../atoms/error";

const ErrorCatcher = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary fallback={<Error />}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorCatcher;

