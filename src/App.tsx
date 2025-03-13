import { FC } from "react";
import { HelmetProviderFC } from "./app/providers/helmet";
import { StoreProvider } from "./app/providers/store";
import { RoutesProviderFC } from "./app/providers/routes";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

import "normalize.css";
import "@/app/styles/style.scss";
import { ModalManager } from "./widgets/modal";

const App: FC = () => {
  return (
    <HelmetProviderFC>
      <StoreProvider>
        <RoutesProviderFC />
        <ModalManager />
      </StoreProvider>
    </HelmetProviderFC>
  );
};

export default App;
