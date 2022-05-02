import { ButtonOptions } from "../../components/bank/serviceOptions/ButtonsOptions";
import { Table } from "../../components/common/Table";

export const ViewService = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="relative z-10 flex-auto flex items-center justify-center text-sm text-gray-600 py-8 px-2 sm:px-2 lg:px-8 gap-6">
                <ButtonOptions/>
            </div>
            <div className="py-8 px-2 sm:px-2 lg:px-8">
                <Table />
            </div>
        </div>
    );
};

export default ViewService;