import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { Tag } from "./Tag";
import { Property } from "./Property";

@Entity()
export class PropertiesTags {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Property, property => property.propertiesTags)
    @JoinColumn({name: "property_id"})
    property: Property;

    @ManyToOne(type => Tag, tag => tag.propertiesTags)
    @JoinColumn({name: "tag_id"})
    tag: Tag;

}
