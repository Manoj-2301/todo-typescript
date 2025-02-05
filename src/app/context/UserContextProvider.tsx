'use client'
import {useState} from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    interface TaskType {
        map: any;
        strike: boolean;
        id: number;
        task: string;
        start: string;
        end: string;
        emoji: string;
        extra: string;
    }

    interface AddProps {
        setTasks: (tasks: TaskType[]) => void;
        tasks: TaskType[];
        updateValue: TaskType;
        setIsFormOpen: any;
        setIsPopOpen: any;
    }
     const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
      const [isPopOpen, setIsPopOpen] = useState<string | null | boolean | number>(null);
      const [updateValue, setUpdateValue] = useState<TaskType | null>(null);
    

    return (
        <UserContext.Provider value={{isFormOpen,setIsFormOpen,isPopOpen,setIsPopOpen,updateValue,setUpdateValue}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;