import { IsNotEmpty,IsUUID , Length} from "class-validator";


export class CreateNotificationBody {
    // Definir os campos que são necessários para criar uma notificação
    @IsNotEmpty() // Dizendo que não pode ser vazio
    @IsUUID() // dizendo que precisa ser um UUID
    recipientId: string;


    @IsNotEmpty() // Dizendo que não pode ser vazio
    @Length(5, 240) // Definindo o tamanho minimo e máximo
    content: string;


    @IsNotEmpty() // Dizendo que não pode ser vazio
    category: string;
}