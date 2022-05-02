import { CustomButton } from "../../common";

interface Props {
    setOptionSelected: (type: number) => void
}

export const ButtonOptions = ({setOptionSelected}:Props) => {

    return (
        <div className="container px-4 mx-auto">
            <div className="relative z-10 flex-auto flex items-center justify-center text-sm text-gray-600 py-16 px-2 sm:px-2 lg:px-8 gap-6">
                <CustomButton
                    onClick={() => setOptionSelected(2)}
                    type="button"
                    content="Pre-registros"
                    className="block mt-4 w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mb-5 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
                />
                <CustomButton
                    onClick={() => setOptionSelected(1)}
                    type="button"
                    content="Registrados"
                    className="block mt-4 w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mb-5 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
                />
            </div>
        </div>
    );
};
