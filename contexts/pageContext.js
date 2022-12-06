import { createContext, useState } from 'react';

//create a context, with createContext api
export const pageDetailsContext = createContext();

const PageDetailsProvider = (props) => {
        // this state will be shared with all components 
    const [page, setPage] = useState(0);

    return (
                // this is the provider providing state
        <pageDetailsContext.Provider value={[page, setPage]}>
            {props.children}
        </pageDetailsContext.Provider>
    );
};

export default PageDetailsProvider;