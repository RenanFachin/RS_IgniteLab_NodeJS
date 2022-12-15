import { Replace } from "@helpers/Replace";
import { Content } from "./notification-content";
import { randomUUID } from 'node:crypto'

export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    // ReadAt é opcional, ou seja ou é DATE ou UNDEFINED. Por isso definimos que é DATE, UNDEFINED e NULL
    createdAt: Date;
}

export class Notification {
    private _id: string;
    private props: NotificationProps;

    // Dizendo para o constructor que o createAt pode ser opcional
    constructor(props: Replace<NotificationProps, { createdAt?: Date }>){
        this._id = randomUUID()
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date()
        }
    }




    // Getters e Setters

    public get id(): string{
        return this._id
    }   

    public set recipientId(recipientId: string){

        this.props.recipientId = recipientId
    }

    public get recipientId(): string{
        return this.props.recipientId
    }    

    public set category(category: string) {

        this.props.category = category
    }

    public get category(): string {
        return this.props.category
    } 

    public set content(content: Content) {

        this.props.content = content
    }

    public get content(): Content {
        return this.props.content
    }  
    
    public set readAt(readAt: Date | null | undefined) {

        this.props.readAt = readAt
    }

    public get readAt(): Date | null | undefined {
        return this.props.readAt
    }   

    public get createdAt(): Date {
        return this.props.createdAt
    }  
}
