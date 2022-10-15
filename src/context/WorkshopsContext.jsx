import { createContext, useContext, useState } from "react";
const WorkshopsContext = createContext();
const WorkshopsProvider = ({ children }) => {
    const [isOpened, setIsOpened] = useState(false);
    const values = {isOpened, setIsOpened};
    return (<WorkshopsContext.Provider value={values}>{children}</WorkshopsContext.Provider>);
}
const useWorkshops = () => useContext(WorkshopsContext);
export { WorkshopsProvider, useWorkshops };