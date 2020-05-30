import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  OneToMany,
} from 'typeorm';
import DetailsGamePlayable from './DetailsGamePlayable';

@Entity('playable')
class Playable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(
    () => DetailsGamePlayable,
    detailsGamePlayable => detailsGamePlayable.playable,
    {
      cascade: true,
    },
  )
  details_game_playable: DetailsGamePlayable[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Playable;
