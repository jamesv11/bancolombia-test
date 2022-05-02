interface Props {
    title: string;
  }
  
  export const TitleForm = ({ title }: Props) => {
    return (
      <div>
        <h2 className="font-semibold text-1xl pb-3 text-gray-800 text-center">{title}</h2>
      </div>
    );
  };
  