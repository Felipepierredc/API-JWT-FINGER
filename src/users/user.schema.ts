import { EntitySchema } from 'typeorm';
import { User } from './user.entity';

export const UserSchema = new EntitySchema<User>({
    
    name: 'User',
    target: User,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        username: {
            type: String,
        },        
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        adress: {
            type: String,
        },
        state: {
            type: String,
        },
        zipcode: {
            type: Number,
        },
        city: {
            type: String,
        },
        village: {
            type: String,
        },
        street: {
            type: String,
        },
        number: {
            type: Number,
        },
    },

});
