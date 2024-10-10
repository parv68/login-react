function Form(props) {
    return (
      <form className="flex flex-col items-center justify-center my-10">
        <input type="text" placeholder="Username" className="p-1 m-1" />
        <input type="password" placeholder="Password" className='p-1 m-1' />
        {!props.isRegistered && (
          <input type="password" placeholder="Confirm Password" className='p-1 m-1' />
        )}
        <button type="submit" className='text-white bg-blue-800 px-10 m-1'>
          {props.isRegistered ? 'Login' : 'Register'}
        </button>
        <a href="#" onClick={props.toggleForm}>
          {props.isRegistered ? 'New user? Register here' : 'Already a user? Login here'}
        </a>
      </form>
    );
  }
  
  export default Form;
  