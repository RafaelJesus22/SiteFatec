import { AppProvider } from "./contexts";
import Routes from "./routes";

export default function App(): JSX.Element {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
