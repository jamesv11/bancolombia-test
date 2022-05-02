import { PropsAppTitle } from "../../interfaces/interfaces";

export const AppTitle = ({ className, style }: PropsAppTitle) => {
  return (
    <h2
      className={`${className}`}
      style={style}
    >
     BANCOLOMBIA
    </h2>
  );
};
