import { Alert, CloseButton } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { ActionTypes } from "../../redux/alert/actions";
import { useTriggerClose } from "../../redux/alert/hooks";
import { AppState } from "../../redux/reducers";

export default function AlertComponent() {
  const { open, type, message } = useSelector((state: AppState) => state.alert);
  const closeAlert = useTriggerClose();

  const severityType = () => {
    switch (type) {
      case ActionTypes.ERROR:
        return "error";
      case ActionTypes.WARNING:
        return "warning";
      case ActionTypes.SUCCESS:
        return "success";
      case ActionTypes.INFO:
        return "info";
      default:
        return undefined;
    }
  };

  return (
    <div>
      {open && (
        <Alert status={severityType()}>
          {message}
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={() => closeAlert()}
          />
        </Alert>
      )}
    </div>
  );
}
