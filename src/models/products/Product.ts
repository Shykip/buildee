import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToMany, OneToMany, JoinTable } from "typeorm"
import { Comment } from "../Comment"
import { ProductEntry } from "./ProductEntry"

@Entity('product')
export class Product extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false
    })
    name: string

    @Column({
        type: 'text'
    })
    description: string

    @OneToMany( () => ProductEntry, productEntry => productEntry.product )
    product_entries: ProductEntry[]

    @OneToMany( () => Comment, comment => comment.product )
    comments: Comment[]
    
}