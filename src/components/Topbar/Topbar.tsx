// Importing necessary modules and components
import { auth } from "@/firebase/firebase"; // Importing authentication module from Firebase
import Link from "next/link"; // Importing Link component from Next.js for navigation
import React from "react"; // Importing React library
import { useAuthState } from "react-firebase-hooks/auth"; // Importing hook for Firebase authentication
import Logout from "../Buttons/Logout"; // Importing Logout component
import { useSetRecoilState } from "recoil"; // Importing Recoil hook for managing state
import { authModalState } from "@/atom/authModalAtom"; // Importing Recoil atom for authentication modal state
import Image from "next/image"; // Importing Image component from Next.js for optimized image loading
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing Chevron icons from React Icons library
import { BsList } from "react-icons/bs"; // Importing List icon from React Icons library
import Timer from "../Timer/Timer"; // Importing Timer component
import { useRouter } from "next/router"; // Importing Next.js router
import { problems } from "@/utils/problems"; // Importing problems data
import { Problem } from "@/utils/types/problem"; // Importing Problem type

// Defining the props for the Topbar component
type TopbarProps = {
  problemPage?: boolean; // Optional prop indicating whether it's a problem page
};

// Topbar component definition
const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {
  // Getting the authenticated user's information
  const [user] = useAuthState(auth);

  // Setting the authentication modal state using Recoil
  const setAuthModalState = useSetRecoilState(authModalState);

  // Accessing the Next.js router
  const router = useRouter();

  // Function to handle changing problems
  const handleProblemChange = (isForward: boolean) => {
    const { order } = problems[router.query.pid as string] as Problem;
    const direction = isForward ? 1 : -1;
    const nextProblemOrder = order + direction;
    const nextProblemKey = Object.keys(problems).find((key) => problems[key].order === nextProblemOrder);

    if (isForward && !nextProblemKey) {
      const firstProblemKey = Object.keys(problems).find((key) => problems[key].order === 1);
      router.push(`/problems/${firstProblemKey}`);
    } else if (!isForward && !nextProblemKey) {
      const lastProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === Object.keys(problems).length
      );
      router.push(`/problems/${lastProblemKey}`);
    } else {
      router.push(`/problems/${nextProblemKey}`);
    }
  };

  // JSX for the Topbar component
  return (
    <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
      <div className={`flex w-full items-center justify-between ${!problemPage ? "max-w-[1200px] mx-auto" : ""}`}>
        {/* Logo */}
        <Link href='/'>
          <Image src='/logo-full.png' alt='Logo' height={100} width={100} />
        </Link>

        {problemPage && (
          // Navigation controls for problem pages
          <div className='flex items-center gap-4 flex-1 justify-center'>
            <div
              className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
              onClick={() => handleProblemChange(false)}
            >
              <FaChevronLeft />
            </div>
            <Link href='/' className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'>
              <div>
                <BsList />
              </div>
              <p>Problem List</p>
            </Link>
            <div
              className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
              onClick={() => handleProblemChange(true)}
            >
              <FaChevronRight />
            </div>
          </div>
        )}

        {/* Right side of the topbar */}
        <div className='flex items-center space-x-4 flex-1 justify-end'>
          {/* Premium link */}
          <div>
            <a
              href='https://www.buymeacoffee.com/burakorkmezz'
              target='_blank'
              rel='noreferrer'
              className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'
            >
              Premium
            </a>
          </div>

          {/* Sign In button if user is not authenticated */}
          {!user && (
            <Link href='/auth' onClick={() => setAuthModalState((prev) => ({ ...prev, isOpen: true, type: "login" }))}>
              <button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded'>Sign In</button>
            </Link>
          )}

          {/* Timer component for authenticated users on problem pages */}
          {user && problemPage && <Timer />}

          {/* User avatar and email information for authenticated users */}
          {user && (
            <div className='cursor-pointer group relative'>
              <Image src='/avatar.png' alt='Avatar' width={30} height={30} className='rounded-full' />
              <div
                className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out'
              >
                <p className='text-sm'>{user.email}</p>
              </div>
            </div>
          )}

          {/* Logout button for authenticated users */}
          {user && <Logout />}
        </div>
      </div>
    </nav>
  );
};

// Exporting the Topbar component as default
export default Topbar;
