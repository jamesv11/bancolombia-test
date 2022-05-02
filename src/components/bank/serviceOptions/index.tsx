

import imgVirtualAccount from "../../../images/Card_img_ahorros.png"
import imgCreditCard from "../../../images/Card_img_nomina.jpg"
import { CardService } from "../CardService";


const VIRTUAL_ACCOUNT_TAGS = [
    { name: "Cuenta virtual" }
]
const CREDIT_CARD_TAGS = [
    { name: "Tarjeta de credito" }
]


export interface ServiceProps {
    handleService: (id:number) => void
    idService? : number
}


export const ServiceOption = ({ handleService, idService }: ServiceProps) => {


    if(idService !== 0) return null

    return (
        <div className="container px-4 mx-auto">
            <div className="relative z-10 flex-auto flex items-center justify-center text-sm text-gray-600 py-16 px-2 sm:px-2 lg:px-8 gap-6">
                <CardService handleService={handleService} serviceId={1} title="Cuenta virtual" description="Es el momento de tener el control de tu dinero.   En Bancolombia ofrecemos cuentas para cada etapa de la vida: abre una y acércate a tus metas." img={imgVirtualAccount} tags={VIRTUAL_ACCOUNT_TAGS} />
                <CardService handleService={handleService} serviceId={2} title="Tarjeta de crédito" description="Es el momento de elegir la tuya. Te ofrecemos tarjetas con beneficios que se adaptan a todas las necesidades, personalidades y estilos de vida." img={imgCreditCard} tags={CREDIT_CARD_TAGS} />
            </div>
        </div>
    );
};
