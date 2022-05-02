import { Tag } from "../../interfaces/interfaces";
import { ServiceProps } from "./serviceOptions";


interface Props extends ServiceProps{
    title: string,
    img: string,
    description: string,
    tags: Tag[];
    serviceId: number
}

export const CardService = ({ title, img, description, tags, handleService,serviceId }: Props) => {
   
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={() => handleService(serviceId)}>
            <img className="w-full" src={img} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">

                {tags.map(({ name }) => (
                    <span key={name} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{name}</span>
                ))}

            </div>
        </div>
    );
};
