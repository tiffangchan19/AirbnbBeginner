import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import { PropertiesTags } from "./PropertiesTags";

@Entity()
export class Tag {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    // // Many-to-Many | One tag can have many properties
    // @ManyToMany(type => Property, property => property.tags)
    // @JoinTable({
    //     name: 'properties_tags',
    //     joinColumns: [
    //         {name: 'tag_id'}
    //     ],
    //     inverseJoinColumns: [
    //         {name: 'property_id'}
    //     ]
    // })
    // properties: Property[]

    @OneToMany((type) => PropertiesTags, (propertiesTags) => propertiesTags.tag)
    propertiesTags: PropertiesTags[];
}