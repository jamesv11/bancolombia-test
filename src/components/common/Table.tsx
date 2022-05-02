import { useNavigate } from "react-router-dom";
import { PreRegister, User } from "../../interfaces/interfaces";
import { CustomButton } from "./CustomButton";

export interface Props {
    data?: User[] | PreRegister[],
    searchType: number
}

export const Table = ({ data, searchType }: Props) => {

    const navigate = useNavigate();

    const getUserById = (id: string) => {
        return data?.find(user => user.id === id)
    }

    const goToCreateServicePage = (id: string) => {
        const user = getUserById(id)
        navigate('/create-service', {
            replace: true, state: {
                user
            }
        });
    }

    return (
        <table className="table-fixed">
            <thead>
                <tr>
                    <th className="w-1/4 px-4 py-2">Id</th>
                    <th className="w-1/4 px-4 py-2">Identificación</th>
                    <th className="w-1/2 px-4 py-2">Nombre</th>
                    <th className="w-1/4 px-4 py-2">Fecha</th>
                    {searchType === 2 && <th className="w-1/4 px-4 py-2">Acción</th>}
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((user) => (
                        <tr key={user.docId}>
                            <td className="border px-4 py-2">{user.docId}</td>
                            <td className="border px-4 py-2">{user.id}</td>
                            <td className="border px-4 py-2">{user.name}</td>
                            <td className="border px-4 py-2">{user.birthDay}</td>
                            {searchType === 2 &&
                                <td className="border px-4 py-2">
                                    <CustomButton
                                        onClick={() => goToCreateServicePage(user.id)}
                                        type="button"
                                        content="Terminarr pre-registro"
                                        className="block mt-4 w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mb-5 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
                                    />
                                </td>
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};
