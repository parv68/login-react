function Form(props){
    return(
        <form action="" className="flex flex-col items-center justify-center my-10">
            <input type="text" placeholder="Username" className="p-1 m-1" />
            <input type="password" placeholder="password" className='p-1 m-1' />
            {!props.isRegistered && (
                <input type="password" placeholder="Confirm Password" className='p-1 m-1' />
            )}
            <button type="submit" className='text-white bg-blue-800 px-10 m-1'>{props.isRegistered ? 'Login':'Register'}</button>
        </form>
    )
}
export default Form