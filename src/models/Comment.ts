import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm"
import { Product } from "./products/Product"
import { Client } from "./Client"

@Entity('comment')
export class Comment extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Client)
    @JoinColumn({ name:"client_id" })
    client: Client

    @Column({
        type: 'text',
        nullable: false
    })
    comment: string

    @ManyToOne(() => Comment, { nullable: true })
    @JoinColumn({ name: 'parent_id' })
    parent: Comment;

    @ManyToOne( () => Product, product => product.comments )
    @JoinColumn({ name: 'product_id' })
    product: number
}