import {
    BaseEntity,
    Entity,
    Unique,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import * as bcrypt from 'bcrypt';
  
  @Entity()
  export class User {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  username: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
  
  @Column()
  email: string;
    
  @Column()
  password: string;
  
  @Column({ default: true })
  isActive: boolean;

  @Column()
  adress: string;

  @Column()
  zipcode: number;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  village: string;

  @Column()
  street: string;

  @Column()
  number: number;

  }