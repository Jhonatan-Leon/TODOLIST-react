import React from "react";

export const Button = ({HandleEvent, ContentText}) => {
    return (
        <button
        onClick={HandleEvent}
        className="w-[80px] p-2 border rounded mb-2 hover:bg-black hover:text-white">
            {ContentText}
        </button>
    )
}