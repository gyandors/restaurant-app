export default function Login() {
  return (
    <div>
      <div>
        <h1>Admin Panel</h1>
        <h1>Login to continue</h1>
      </div>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email " />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password " />
        </div>
      </form>
    </div>
  );
}
