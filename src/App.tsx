import React from "react";
import { Button } from "@chakra-ui/react";
import AlertComponent from "./components/AlertComponent/AlertComponent";
import {
  useTriggerError,
  useTriggerInfo,
  useTriggerSuccess,
  useTriggerWarning,
} from "./redux/alert/hooks";

function App() {
  const errorAlert = useTriggerError();
  const successAlert = useTriggerSuccess();
  const warningAlert = useTriggerWarning();
  const infoAlert = useTriggerInfo();

  return (
    <div>
      <Button colorScheme="blue" onClick={() => infoAlert("Info Message")}>
        Info
      </Button>
      <Button colorScheme="red" onClick={() => errorAlert("Error Alert")}>
        Error
      </Button>
      <Button
        colorScheme="yellow"
        onClick={() => warningAlert("Warning Message")}
      >
        Warning
      </Button>
      <Button
        colorScheme="green"
        onClick={() => successAlert("Success Message")}
      >
        Success
      </Button>
      <AlertComponent />
    </div>
  );
}

export default App;
