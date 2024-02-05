import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm"
import { Product } from "./Product"

@Entity('product_entry')
export class ProductEntry extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Product, (product) => product.product_entries)
  @JoinColumn({ name: 'product_id' })
  product: Product

  @Column({
      type: 'varchar',
      length: 100,
      nullable: false
  })
  type: string

  @Column({
      type: 'tinyint',
      unsigned: true,
      default: 0,
  })
  quantity: number

  @Column({
      type: 'decimal',
      precision: 10,
      scale: 2,
      nullable: false
  })
  price: number
}