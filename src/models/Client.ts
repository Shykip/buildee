import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity('client')
export class Client extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        length: 20,
        nullable: false,
        unique: true
    })
    username: string

    @Column({
        type: 'varchar',
        length: 20,
        nullable: false
    })
    firstname: string

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false
    })
    lastname: string

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
        unique: true
    })
    email: string

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false
    })
    password: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
        unique: true
    })
    profile_name: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    shipping_address: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}