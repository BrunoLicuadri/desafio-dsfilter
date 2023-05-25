import { createContext } from "react";

export type ContextItemCountType ={
    contextItemCount: number;
    setContextItemCount: (contextItemCount: number) => void;
}

export const ContextItemCount = createContext<ContextItemCountType>({
    contextItemCount: 0,
    setContextItemCount: ()=>{}
})