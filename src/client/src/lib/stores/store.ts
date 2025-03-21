import { createContext } from "react";
import CounterStore from "./counterStore";

interface Store {
    countStore: CounterStore
}

export const store: Store = {
    countStore: new CounterStore()
}

export const StoreContext = createContext(store);