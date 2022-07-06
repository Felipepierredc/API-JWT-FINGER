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
  firstName: string;

  @Column()
  lastName: string;
  
  @Column()
  email: string;
    
  @Column()
  password: string;
  
  @Column({ default: true })
  isActive: boolean;

  }