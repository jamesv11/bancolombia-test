import { useEffect, useState } from "react";
import { ButtonOptions } from "../../components/bank/serviceOptions/ButtonsOptions";
import { Table } from "../../components/common/Table";
import { User } from "../../interfaces/interfaces";
import { getPreRegisters } from "../../services/preRegister/preRegisterService";
import { getUsers } from "../../services/user/userService";

export const ViewService = () => {

    const [optionSelected, setOptionSelected] = useState<number>(1);
    const [user, setUsers] = useState<User[]>([]);

    const getUsersDb = async () => {
        const users = await getUsers();
        if (users) {
            setUsers(users);
        }

    }

    const getPreRegistersDb = async () => {
        const preRegister = await getPreRegisters();
        if (preRegister) {
            setUsers(preRegister)
        }
    }

    useEffect(() => {
        getUsersDb();
    }, [])

    useEffect(() => {
        if (optionSelected === 2) {
            getPreRegistersDb()
        }else{
            getUsersDb();
        }
    }, [optionSelected])

    return (
        <div className="container px-4 mx-auto">
            <div className="relative z-10 flex-auto flex items-center justify-center text-sm text-gray-600 py-8 px-2 sm:px-2 lg:px-8 gap-6">
                <ButtonOptions setOptionSelected={setOptionSelected} />
            </div>
            <div className="py-8 px-2 sm:px-2 lg:px-8">
                <Table data={user} />
            </div>
        </div>
    );
};

export default ViewService;