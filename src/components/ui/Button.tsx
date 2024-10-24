

type Props = {
    text: string;
    onClick: () => void;
    red?: boolean;
}

export default function Button ({text, onClick, red}: Props) {


    return <button className={`border-none rounded-md py-2 px-8 text-white font-bold leading-4 ${red? 'bg-rose-600' : "bg-blue-600"}`}>
        {text}
    </button>;
}