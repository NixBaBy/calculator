import sqStle from "./square.module.css";
export const Squar = (props) => {
  return (
    <div className={sqStle.squar}>
      {props.value.map((num) => (
        <div className={sqStle.num}>{num}</div>
      ))}
    </div>
  );
};
