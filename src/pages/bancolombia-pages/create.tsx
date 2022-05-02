import { useEffect, useState } from "react";
import { ServiceForm } from "../../components/bank/ServiceForm";
import { ServiceOption } from "../../components/bank/serviceOptions";
import { CustomButton } from "../../components/common";


export const CreateService = () => {

    const [serviceSelected, setServiceSelected] = useState<number>(0)

    const handleService = (idService: number) => {
        setServiceSelected(idService)
    }

    useEffect(() => {
        setServiceSelected(0)
    }, [])

    return (
        <div className="container px-4 mx-auto">
            <div className="relative z-10 flex-auto flex items-center justify-center text-sm text-gray-600 py-16 px-2 sm:px-2 lg:px-8">
                <ServiceOption handleService={handleService} idService={serviceSelected} />
                <ServiceForm idService={serviceSelected} />
            </div>
            <div>
                {
                    serviceSelected !== 0 && <CustomButton
                        type="button"
                        content="Guardar pre-registro"
                        className="block mt-4 w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mb-5 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
                    />
                }
            </div>
        </div>
    );
};

export default CreateService;
