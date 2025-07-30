import { useReducer, useCallback, useState } from "react";
import Input from "../components/Input";
import ShowPreview from "../components/ShowPreview";
import { VALIDATOR_REQUIRE } from "../util/validator";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../services/apiProducts";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE": {
      const updatedInputs = {
        ...state.inputs,
        [action.inputId]: { value: action.value, isValid: action.isValid },
      };
      const formIsValid = Object.values(updatedInputs).every(
        (input) => input.isValid
      );
      return { inputs: updatedInputs, isValid: formIsValid };
    }

    default:
      return state;
  }
};

const AddProduct = () => {
  const navigate = useNavigate();
  const [showPreview, setShowPreview] = useState(false);

  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      name: { value: "", isValid: false },
      price: { value: "", isValid: false },
      description: { value: "", isValid: false },
      category: { value: "", isValid: false },
      image: { value: null, isValid: false },
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: "INPUT_CHANGE", inputId: id, value, isValid });
  }, []);

  const getImagePreview = (file) => {
    if (file && typeof file === "object") {
      return URL.createObjectURL(file);
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formState.inputs.name.value);
    data.append("description", formState.inputs.description.value);
    data.append("price", parseFloat(formState.inputs.price.value));
    data.append("category", formState.inputs.category.value);
    data.append("image", formState.inputs.image.value);

    try {
      await addProduct(data);
      toast.success("Product added successfully");
      setShowPreview(false);
      navigate("/products");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 sm:p-10 bg-gray-100 dark:bg-[#1a1a2e] text-gray-900 dark:text-[#fff8e7] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white dark:bg-[#0f0f1e] rounded-xl shadow-md border border-gray-200 dark:border-[#ff4d00]/30">
        <div className="border-b border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-2xl font-[Orbitron] text-[#ff4d00]">
            Add New Pizza
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Fill out the form to create a new product.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
        >
          <Input
            id="name"
            name="name"
            element="input"
            type="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter pizza name"
            onInput={inputHandler}
          />

          <Input
            id="price"
            name="price"
            element="input"
            type="number"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter pizza price"
            onInput={inputHandler}
          />

          <Input
            id="category"
            name="category"
            element="input"
            type="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter pizza category"
            onInput={inputHandler}
          />

          <Input
            id="image"
            name="image"
            element="input"
            type="file"
            accept="image/*"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please upload a pizza image"
            onInput={inputHandler}
          />

          <div className="md:col-span-2">
            <Input
              id="description"
              name="description"
              element="textarea"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter pizza description"
              onInput={inputHandler}
            />
          </div>

          <div className="md:col-span-2 flex gap-4 justify-end mt-4">
            <button
              type="button"
              className="bg-[#ff4d00] hover:bg-[#e94300] px-6 py-2 text-white font-bold rounded-md shadow"
              onClick={() => setShowPreview(true)}
            >
              Add product
            </button>
          </div>
        </form>

        {showPreview && (
          <ShowPreview
            formState={formState}
            setShowPreview={setShowPreview}
            getImagePreview={getImagePreview}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default AddProduct;
