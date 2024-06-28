import { useState } from "react";
import { DraftLink } from "../../types";
import { useShorterStore } from "../../store.ts";

export default function Form() {
  const [data, setData] = useState<DraftLink>({
    long_url: "",
  });

  const error = useShorterStore((state) => state.error);
  const newLink = useShorterStore((state) => state.newLink);
  const newError = useShorterStore((state) => state.newError);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData({
      long_url: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (Object.values(data).includes("")) {
      newError("Please add a link");
      return;
    }

    setData({
      long_url: "",
    });
    newError("");
    newLink(data);
  }

  return (
    <div className="main__form">
      <img className="form__bgMobile" src="/bg-shorten-mobile.svg" alt="" />
      <img className="form__bgDesktop" src="/bg-shorten-desktop.svg" alt="" />

      <form className="form__form" onSubmit={handleSubmit}>
        <div className="form__field">
          <label className="sr-only" htmlFor="shorten-link">
            shorten a link at the input
          </label>
          <input
            id="shorten-link"
            type="text"
            className={`${error && "form__input--error"} : form__input`}
            placeholder="Shorten a link here..."
            onChange={handleChange}
            value={data.long_url}
          />
        </div>
        <button className="form__submit" type="submit">
          Shorten It!
        </button>
      </form>

      {error && <span className="form__error">{error}</span>}
    </div>
  );
}
