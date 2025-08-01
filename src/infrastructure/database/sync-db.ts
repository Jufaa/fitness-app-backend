// configuracion de la base de datos
import { ExercisesSchema } from '@infrastructure/schemas/Exercises-schema';
import { ExerciseSubMuscleSchema } from '@infrastructure/schemas/ExersiceSubMuscle-schema';
import { MainMuscleSchema } from '@infrastructure/schemas/MainMuscle-schema';
import { RoutineExerciseDetailSchema } from '@infrastructure/schemas/RoutineExerciseDetail-schema';
import { RoutinesSchema } from '@infrastructure/schemas/Routines-schema';
import { RoutineExercisesSchema } from '@infrastructure/schemas/RoutinesExercises-schema';
import { SubMuscleSchema } from '@infrastructure/schemas/SubMuscle-schema';
import { UsersSchema } from '@infrastructure/schemas/User-schemas';
import { Sequelize } from 'sequelize-typescript';
import config from 'shared/utils/config';

export const sequelize = new Sequelize({
  ...config.getDataBaseConfig(),
  dialect: 'mysql',
  models: [
    ExercisesSchema,
    ExerciseSubMuscleSchema,
    MainMuscleSchema,
    RoutineExerciseDetailSchema,
    RoutinesSchema,
    RoutineExercisesSchema,
    SubMuscleSchema,
    UsersSchema,
  ],
  logging: console.log,
});

export const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado a la base de datos correctamente.');

    await sequelize.sync({ alter: true }); // Crea o actualiza tablas
    console.log('✅ Base de datos sincronizada correctamente.');
    console.log(
      'Modelos registrados en Sequelize:',
      Object.keys(sequelize.models),
    );
  } catch (error) {
    console.error('❌ Error al sincronizar la base de datos:', error);
  }
};
