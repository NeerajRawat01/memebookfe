import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { AppState } from "@/store";
import { decrement, increment } from "@/store/slices/authSlice";

export function Counter() {
  const count = useSelector((state: AppState) => state.auth.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex gap-5">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
