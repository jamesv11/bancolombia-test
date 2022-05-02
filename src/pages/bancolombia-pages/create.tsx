import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ServiceForm } from "../../components/bank/ServiceForm";
import { ServiceOption } from "../../components/bank/serviceOptions";
import { SERVICE_TYPE } from "../../interfaces/interfaces";


export const CreateService = () => {

    const location:any = useLocation();

    console.log(location.state?.user)

    const [serviceSelected, setServiceSelected] = useState<number>(0)

    const handleService = (idService: number) => {
        setServiceSelected(idService)
    }

    useEffect(() => {
        setServiceSelected(0)
    }, [])

    useEffect(() => {
        if(location.state?.user){
            if(location.state?.user.serviceType === SERVICE_TYPE.virtualAccount){
                setServiceSelected(SERVICE_TYPE.virtualAccount)
            }else{
                setServiceSelected(SERVICE_TYPE.creditCard)
            }
        }
    }, [location.state?.user])

    return (
        <div className="container px-4 mx-auto">
            <div className="relative z-10 flex-auto flex flex-col items-center justify-center text-sm text-gray-600 py-16 px-2 sm:px-2 lg:px-8">
                <ServiceOption handleService={handleService} idService={serviceSelected} />
                <ServiceForm idService={serviceSelected} userDb={location.state?.user}/>
            </div>
           
        </div>
    );
};

export default CreateService;
