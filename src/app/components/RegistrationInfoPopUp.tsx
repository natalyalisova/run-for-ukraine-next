import Link from "next/link";

export const RegistrationInfoPopUp = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="flex flex-col bg-white p-5 rounded-lg shadow-lg relative justify-center items-center m-5">
        <h3 className="my-6 md:w-96">
          Thank you for choosing us! Please check your mail, we have sent you a
          registration confirmation letter.
        </h3>
        <p className="my-6 md:w-96">
          Thank you,
          <br />
          #RunforUkraibne Team
        </p>
        <Link
          href="/"
          className="w-full p-3 mt-6 rounded-md bg-strong-azure text-yellow-gold hover:bg-blue-600 focus:outline-none text-center"
        >
          Return to main page
        </Link>
      </div>
    </div>
  );
};
