
import ButtonComponent from '../components/Button';
import InputComponent from '../components/input';

export default function LoginSignUp() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="shadow-lg p-4 m-2 h-96 w- flex flex-row items-center justify-center font-semibold">

                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                Entre na sua conta
                            </h2>

                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="-space-y-px rounded-md shadow-sm">
                                <div>
                                    <InputComponent
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        classNameInput="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        classNameLabel="sr-only"
                                        placeholder="Email address"
                                    />

                                </div>
                                <div>
                                    <InputComponent
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        classNameInput="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        classNameLabel="sr-only"
                                        placeholder="Senha"

                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                            </div>

                            <div>
                                <ButtonComponent
                                    id="sign_in"
                                    typeButton="submit"
                                    desctiption="Acessar minha conta"
                                    classNameButton="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                />

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                            <div className="text-sm flex flex-row items-center">
                                <label> Não possui conta? </label>&nbsp; 
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                 Cadastre-se!
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}