import { Survey } from "survey-react-ui";
import model from "./model/assessment";

export default function Assessment() {
  // @ts-expect-error -- not interested in trying to spread arguments all the damn time...
  return <Survey model={model} />;
}
