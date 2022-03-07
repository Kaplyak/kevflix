import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Link from 'next/link';
import { Layout } from '../../components/account/Layout';
import { userService } from '../../services/user.service';
import { alertService } from '../../services/alert.service';

import Logo from '../../components/ui/Logo';
import Footer from '../../components/ui/Footer';

export default function Register() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(user) {
        return userService.register(user)
            .then(() => {
                alertService.success('Registration successful', { keepAfterRouteChange: true });
                router.push('login');
            })
            .catch(alertService.error);
    }

    return(
        <>
            <div className="h-screeen bg-cover" style={{"backgroundImage": "url(https://assets.nflxext.com/ffe/siteui/vlv3/eb482c64-e879-4e88-9ddc-d839cb7d1232/f370981b-4b5f-4af6-8006-cce900a0fd25/DE-en-20220131-popsignuptwoweeks-perspective_alpha_website_large.jpg)"}}>
                <div className="flex mx-10 pt-5">
                    <Logo width="180" />
                </div>
                <div className="flex items-center justify-center py-20">
                    <div className="flex flex-col justify-center bg-rgba-black px-20 pt-20 pb-40 rounded">
                        <h1 className="text-white text-4xl mb-10">Register</h1>
                        <form className="opacity-100" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <input 
                                    className="bg-zinc-700 pl-2 py-2 rounded" 
                                    placeholder="Username"
                                    name="username"
                                    type="text"
                                    {...register("username")}
                                ></input>
                            </div>
                            <div className="mb-4">
                                <input 
                                    className="bg-zinc-700 pl-2 py-2 rounded" 
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    {...register("password")}
                                ></input>
                            </div>
                            <button 
                                className="bg-red-600 text-white mt-5 px-5 py-2 rounded-md w-full"
                                disabled={formState.isSubmitting}    
                            >
                                Register
                            </button>
                        </form>
                    </div>
                </div>
                <div className="bg-rgba-black mt-20">
                    <Footer />
                </div>
            </div>
        </>
    );
}