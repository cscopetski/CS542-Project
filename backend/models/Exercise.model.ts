import {
    Model,
    Table,
    DataType,
    Column,
    PrimaryKey,
    BelongsTo,
    ForeignKey,
    AutoIncrement,
    HasMany,
  } from 'sequelize-typescript';
  import { User } from './User.model';
import { WorkoutSet } from './Set.model';
  
@Table
export class Exercise extends Model<Exercise> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare id: number;

    @Column(DataType.STRING)
    declare name: string;

    @Column(DataType.STRING)
    declare targetMuscle: string;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @HasMany(() => WorkoutSet)
    sets: WorkoutSet[]
}
  