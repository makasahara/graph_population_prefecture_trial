
import { QueryClient, QueryClientProvider } from "react-query";
import TopPage from "./components/pages/topPage";
import LoadingBoundary from "./components/molecules/loadingBoundary";
import ErrorCatcher from "./components/molecules/errorCatcher";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

function App() {
  return (
    <LoadingBoundary>
      <ErrorCatcher>
        <QueryClientProvider client={queryClient}>
          <TopPage />
        </QueryClientProvider>
      </ErrorCatcher>
    </LoadingBoundary>
  );
}

export default App;
