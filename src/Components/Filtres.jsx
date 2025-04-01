import { Button } from "./Button";

export const Filtre = () => {
    return(
        <div className="w-full flex justify-between items-center mt-4 ">
        <Button HandleEvent={() => console.log("All task")} ContentText={'All'} />
        <Button HandleEvent={() => console.log("Pending")} ContentText={'Pending'} />
        <Button HandleEvent={() => console.log("Complete")} ContentText={'Complete'} />
        </div>
    )
}