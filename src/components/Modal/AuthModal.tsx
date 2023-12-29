// IMPORTING THE authModalState FROM A SPECIFIC PATH.
import { authModalState } from '@/atom/authModalAtom'
import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import Login from './Login'
import ResetPassword from './ResetPassword'
import Signup from './Signup'
import { useRecoilValue, useSetRecoilState } from 'recoil'

// DEFINING THE TYPE FOR AuthModalProps.
type AuthModalProps = {}

// AUTHMODAL COMPONENT DEFINITION.
const AuthModal: React.FC<AuthModalProps> = () => {
  // USING RECOIL TO GET THE CURRENT STATE OF authModal AND THE FUNCTION TO CLOSE THE MODAL.
  const authModal = useRecoilValue(authModalState)
  const closeModal = useCloseModal()

  return (
    <>
      {/* BACKGROUND OVERLAY FOR THE MODAL, CLICKING ON IT TRIGGERS THE closeModal FUNCTION. */}
      <div
        className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60'
        onClick={closeModal}
      ></div>

      {/* MAIN MODAL CONTAINER */}
      <div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
        <div className='relative w-full h-full mx-auto flex items-center justify-center'>
          {/* MODAL CONTENT */}
          <div className='bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6'>
            <div className='flex justify-end p-2'>
              {/* CLOSE BUTTON FOR THE MODAL */}
              <button
                type='button'
                className='bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white'
                onClick={closeModal}
              >
                <IoClose className='h-5 w-5' />
              </button>
            </div>

            {/* CONDITIONALLY RENDERING Login, Signup, OR ResetPassword COMPONENT BASED ON authModal TYPE */}
            {authModal.type === 'login' ? (
              <Login />
            ) : authModal.type === 'register' ? (
              <Signup />
            ) : (
              <ResetPassword />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

// EXPORTING THE AuthModal COMPONENT AS THE DEFAULT EXPORT.
export default AuthModal

// CUSTOM HOOK FOR HANDLING MODAL CLOSURE LOGIC.
function useCloseModal () {
  // USING RECOIL TO SET THE STATE OF authModal.
  const setAuthModal = useSetRecoilState(authModalState)

  // FUNCTION TO CLOSE THE MODAL.
  const closeModal = () => {
    setAuthModal(prev => ({ ...prev, isOpen: false, type: 'login' }))
  }

  // ADDING AN EVENT LISTENER FOR THE 'ESCAPE' KEY TO CLOSE THE MODAL.
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleEsc)

    // CLEANUP: REMOVE THE EVENT LISTENER WHEN THE COMPONENT IS UNMOUNTED.
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return closeModal
}
