import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#001a3a] via-[#00356B] to-[#002952]">
      <SignIn
        appearance={{
          elements: {
            rootBox: 'mx-auto',
            card: 'bg-white shadow-2xl rounded-2xl',
            headerTitle: 'text-[#00356B]',
            headerSubtitle: 'text-gray-500',
            socialButtonsBlockButton:
              'border-gray-200 hover:bg-gray-50 transition-colors',
            formButtonPrimary:
              'bg-[#00356B] hover:bg-[#002952] transition-colors',
            footerActionLink: 'text-[#00356B] hover:text-[#002952]',
          },
        }}
      />
    </div>
  )
}
