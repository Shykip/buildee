import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Client{

    @PrimaryGeneratedColumn()
    client_id: number

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false
    })
    username: string

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false
    })
    email: string

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false
    })
    password: string
}