import UseSignUp from "../../hooks/UseSignUp";

    const Signup = () => {
      const  {
        createUser,email,setEmail,password,setPassword
     }=UseSignUp()
    return (
        <>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Create an account
            </h2>
        </div>

        <div className="mt-8 md:mx-auto sm:w-full sm:max-w-md ">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" >
                <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                </label>
                <div className="mt-1">
                    <input
                    name="username"
                    type="text"
                  
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                </div>

                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                </label>
                <div className="mt-1">
                    <input
                    
                    name="email"
                    type="email"
                  

                    onChange={(e) => setEmail(e.target.value)} 
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                </div>

                <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div className="mt-1">
                    <input
                    name="password"
                    type="password"
                    
                  
                    
                    onChange={(e) => setPassword(e.target.value)} 
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    onClick={createUser}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Signup
                </button>
                </div>
            </form>
           
            </div>
        </div>
        </div>
        </>

    );
    };

    export default Signup;
