import { useEffect, useState } from "react";
import { ServiceForm } from "../../components/bank/ServiceForm";
import { ServiceOption } from "../../components/bank/serviceOptions";


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
            <div className="relative z-10 flex-auto flex flex-col items-center justify-center text-sm text-gray-600 py-16 px-2 sm:px-2 lg:px-8">
                <ServiceOption handleService={handleService} idService={serviceSelected} />
                <ServiceForm idService={serviceSelected} />
            </div>
           
        </div>
    );
};

export default CreateService;
