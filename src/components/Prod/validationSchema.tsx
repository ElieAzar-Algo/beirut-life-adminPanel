import * as Yup from 'yup';

export const ProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .label('Title'),
  unit: Yup.string().required('Required').label('Unit'),
  premium: Yup.number(),
  oldPrice: Yup.number(),
  inventory: Yup.number(),
  featured: Yup.boolean(),
  category: Yup.string()
    .required('Required')
    .matches(/(Veges|Fruit)/, {
      excludeEmptyString: true,
    }),
});
