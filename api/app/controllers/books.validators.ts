import { ValidationChain, body } from 'express-validator/check';

export const validateCreateBook: ValidationChain[] = [
  body('name', "name doesn't exists").exists(),
  body('genre')
    .optional()
    .isString(),
  body('year', "year doesn't exists")
    .exists()
    .isInt(),
  body('imageUrl')
    .optional()
    .isURL()
];
