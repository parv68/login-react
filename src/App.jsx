
import Form from './form';
var userIsRegistered = true;
export default function App() {
  return (
    <>
    <div className='container flex items-center justify-center'>
      <Form IsRegistered={userIsRegistered} />
    </div>
    </>
  )
}
