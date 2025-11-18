import { ContactType } from "../types/commonTypes";



interface CardDefaultPropsContact {
    contactObject: ContactType
    onDeleted: (id: string) => void
}

interface CardsContainerDefaultProps {
    onDeleteCard: (id: string) => void
    contactObjects: ContactType[]
}

export {CardDefaultPropsContact, CardsContainerDefaultProps}
