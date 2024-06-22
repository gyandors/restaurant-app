import { useRef, useContext } from "react";
import { authContext } from "../../context/auth-context";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const authCtx = useContext(authContext);

  async function handleFormSubmit(event) {
    event.preventDefault();

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCZNu5x48Hf9bc7PilLTCKUSZ6x-GmvzvQ",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      authCtx.onLogin(data);
    }
  }
  return (
    <div className="w-96 m-auto mt-10 p-5 border shadow rounded-xl flex flex-col items-center">
      <div className="mb-10">
        <h1 className="text-xl font-semibold">Admin Panel</h1>
        <p>Login to continue</p>
      </div>
      <form className="w-full" onSubmit={handleFormSubmit}>
        <div className="mb-5">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="ring-1 ring-inset ring-gray-600 w-full rounded-md p-1"
            type="email"
            name="email"
            id="email"
            ref={emailRef}
          />
        </div>
        <div className="mb-5">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            className="ring-1 ring-inset ring-gray-600 w-full rounded-md p-1"
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
          />
        </div>
        <div>
          <button
            className="border rounded-lg py-1 px-2 text-white bg-amber-500 hover:bg-amber-600"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
