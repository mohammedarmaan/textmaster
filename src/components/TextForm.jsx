// src/components/TextForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const TextForm = () => {
  const [text, setText] = useState("text");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  const removeExtraSpaces = () => {
    setText(text.split(/\s+/).join(" "));
  };

  const handleTextClick = () => {
    document.getElementById("textarea").select();
  };

  const handleCopy = () => {
    let textarea = document.getElementById("textarea");
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
  };

  const handleCTClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container dark:bg-slate-800 mx-auto mt-5 p-5 ">
      <div className="mb-3">
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl font-bold text-center mb-5"
        >
          TextForm
        </motion.h4>

        <motion.textarea
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full p-3 border border-gray-300 rounded-lg"
          id="textarea"
          value={text}
          onClick={handleTextClick}
          onChange={handleOnChange}
          placeholder="Enter text here..."
          rows="8"
        ></motion.textarea>
      </div>

      <div className="flex flex-wrap gap-3 mb-5">
        <motion.button
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </motion.button>

        <motion.button
          whileTap={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={removeExtraSpaces}
        >
          Remove Extra Spaces
        </motion.button>

        <motion.button
          whileTap={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-blue-500 dark:bg-black text-white py-2 px-4 rounded"
          onClick={handleCopy}
        >
          Copy Text
        </motion.button>

        <motion.button
          whileTap={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-red-500 text-white py-2 px-4 rounded"
          onClick={handleCTClick}
        >
          Clear Text
        </motion.button>
      </div>

      <div className="my-5">
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl font-bold"
        >
          Text Summary
        </motion.h4>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-2"
        >
          {text.split(/\s+/).filter((word) => word.length > 0).length} words and{" "}
          {text.replace(/\s/g, "").length} characters
        </motion.p>
      </div>

      <div className="mt-5">
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-xl font-bold"
        >
          Preview
        </motion.h4>
        <p className="mt-2">
          {text === "" ? "Enter text to preview" : text}
        </p>
      </div>
    </div>
  );
};

export default TextForm;
