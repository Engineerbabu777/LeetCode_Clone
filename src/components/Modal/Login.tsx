// IMPORTING NECESSARY DEPENDENCIES AND COMPONENTS.
import { authModalState } from "@/atom/authModalAtom"; // IMPORTING RECOIL STATE FOR MANAGING THE AUTHENTICATION MODAL STATE.
import { auth } from "../../firebase/firebase"; // IMPORTING THE FIREBASE AUTHENTICATION INSTANCE.
import { useRouter } from "next/router"; // IMPORTING NEXT.JS ROUTER FOR NAVIGATION.
import React, { useEffect, useState } from "react"; // IMPORTING REACT AND ITS HOOKS.
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"; // IMPORTING FIREBASE HOOKS FOR SIGN-IN.
import { useSetRecoilState } from "recoil"; // IMPORTING RECOIL HOOK FOR SETTING STATE.
import { toast } from "react-toastify"; // IMPORTING A TOAST NOTIFICATION LIBRARY.
type LoginProps = {}; // DEFINING THE TYPE FOR THE LOGIN-PROPS.

// LOGIN COMPONENT DEFINITION.
const Login: React.FC<LoginProps> = () => {
    // USING RECOIL TO SET THE AUTHENTICATION MODAL STATE.
	const setAuthModalState = useSetRecoilState(authModalState);
    
    // FUNCTION TO HANDLE CLICK EVENTS AND UPDATE THE MODAL TYPE.
	const handleClick = (type: "login" | "register" | "forgotPassword") => {
		setAuthModalState((prev) => ({ ...prev, type }));
	};

    // STATE FOR MANAGING INPUT VALUES.
	const [inputs, setInputs] = useState({ email: "", password: "" });

    // FIREBASE HOOK FOR SIGNING IN WITH EMAIL AND PASSWORD.
	const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    // NEXT.JS ROUTER INSTANCE FOR NAVIGATION.
	const router = useRouter();

    // FUNCTION TO HANDLE INPUT CHANGES.
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

    // FUNCTION TO HANDLE THE LOGIN FORM SUBMISSION.
	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!inputs.email || !inputs.password) return alert("Please fill all fields");
		try {
			const newUser = await signInWithEmailAndPassword(inputs.email, inputs.password);
			if (!newUser) return;
			router.push("/");
		} catch (error: any) {
			// DISPLAYING AN ERROR TOAST NOTIFICATION.
			toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
		}
	};

    // EFFECT TO DISPLAY AN ERROR TOAST IF THERE IS AN AUTHENTICATION ERROR.
	useEffect(() => {
		if (error) toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
	}, [error]);

    // RENDERING THE LOGIN FORM.
	return (
		<form className='space-y-6 px-6 pb-4' onSubmit={handleLogin}>
			<h3 className='text-xl font-medium text-white'>Sign in to LeetClone</h3>
			
            {/* INPUT FIELD FOR EMAIL */}
            <div>
				<label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
					Your Email
				</label>
				<input
					onChange={handleInputChange}
					type='email'
					name='email'
					id='email'
					className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-500 placeholder-gray-400 text-white
        '
					placeholder='name@company.com'
				/>
			</div>
            
            {/* INPUT FIELD FOR PASSWORD */}
            <div>
				<label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
					Your Password
				</label>
				<input
					onChange={handleInputChange}
					type='password'
					name='password'
					id='password'
					className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-500 placeholder-gray-400 text-white
        '
					placeholder='*******'
				/>
			</div>

            {/* BUTTON FOR SUBMITTING THE LOGIN FORM */}
			<button
				type='submit'
				className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
                text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
            '
			>
				{loading ? "Loading..." : "Log In"}
			</button>

            {/* BUTTON FOR TRIGGERING FORGOT PASSWORD */}
			<button className='flex w-full justify-end' onClick={() => handleClick("forgotPassword")}>
				<a href='#' className='text-sm block text-brand-orange hover:underline w-full text-right'>
					Forgot Password?
				</a>
			</button>

            {/* LINK TO REGISTER */}
			<div className='text-sm font-medium text-gray-300'>
				Not Registered?{" "}
				<a href='#' className='text-blue-700 hover:underline' onClick={() => handleClick("register")}>
					Create account
				</a>
			</div>
		</form>
	);
};

// EXPORTING THE LOGIN COMPONENT AS THE DEFAULT EXPORT.
export default Login;
