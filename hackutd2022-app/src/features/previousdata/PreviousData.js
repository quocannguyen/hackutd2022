import {useSelector} from "react-redux";
import {selectPreviousData} from "./previousDataSlice";

export function PreviousData() {
    const previousData = useSelector(selectPreviousData)

    return (
        <section>
            {previousData.map((datum) => {
                return <li>{datum}</li>
            })}
        </section>
    )
}