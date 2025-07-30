import { useEffect, useReducer } from "react";
import { validate } from "../util/validator";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }

    default:
      return state;
  }
};

const Input = ({
  element,
  id,
  onInput,
  validators,
  errorText,
  type = "text",
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });

  const { value, isValid, isTouched } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  function changeHandler(e) {
    let val = e.target.value;
    if (type === "file") {
      val =
        e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
    }

    dispatch({
      type: "CHANGE",
      val,
      validators,
    });
  }

  function touchHandler() {
    dispatch({
      type: "TOUCH",
    });
  }

  const elementOutput =
    element === "input" ? (
      <input
        id={id}
        name={id}
        type={type}
        value={type === "file" ? undefined : value}
        onChange={changeHandler}
        onBlur={touchHandler}
        className="w-full  px-4 py-2 rounded bg-[#1a1a2e] text-white border border-[#ff4d00]/30 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
      />
    ) : (
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={changeHandler}
        onBlur={touchHandler}
        className="w-full px-4 py-2 rounded bg-[#1a1a2e] text-white border border-[#ff4d00]/30 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
      />
    );
  return (
    <div className="mt-2">
      <label htmlFor={id}>{`Pizza ${id}`}</label>
      {elementOutput}
      {!isValid && isTouched && (
        <p className="text-[12px] text-red-500">{errorText}</p>
      )}
    </div>
  );
};

export default Input;
