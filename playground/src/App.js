import "./App.css";
// import { CenteredSpinner } from "./component-lib/index";
import "bootstrap/dist/css/bootstrap.css";
import { useIsPhoneContext } from "./component-lib/index";
import { AlertWrapped } from "./component-lib/index";

// import "@orr/shared-style";
// import "@orr/shared-style/src/index";
function App() {
  const isphone = useIsPhoneContext();

  return (
    <div>
      {/* <h3 className="id">123</h3>
      <CenteredSpinner
        loading={true}
        size="md"
        loadingText="Authenticating..."
      /> */}
      <AlertWrapped
        header="error occurs"
        title="no data"
        text="no data available"
        bgStyle="danger"
        textColor="blue"
      />
    </div>
  );
}

export default App;
