import { ContactType } from "../types/commonTypes";


interface FormProps {
    callbackInfo: (contact: ContactType) => void
}

export {FormProps}