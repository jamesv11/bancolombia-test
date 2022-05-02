import { PreRegister, User } from "../../interfaces/interfaces";

export interface Props {
    data?: User[] | PreRegister[]
}

export const Table = ({ data }: Props) => {

    return (
        <table className="table-fixed">
            <thead>
                <tr>
                    <th className="w-1/4 px-4 py-2">Id</th>
                    <th className="w-1/4 px-4 py-2">Identificación</th>
                    <th className="w-1/2 px-4 py-2">Nombre</th>
                    <th className="w-1/4 px-4 py-2">Fecha</th>
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
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};
