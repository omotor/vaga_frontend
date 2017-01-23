export const conditions = [
  'Tornado',
  'Tempestade tropical',
  'Furacão',
  'Tempestades severas',
  'Trovoadas',
  'Misto de chuva e neve',
  'Misto de chuva e granizo',
  'Misto de neve e granizo',
  'Garoa congelante',
  'Garoa',
  'Chuva gelada',
  'Chuva',
  'Chuva',
  'Nevoeiro',
  'Chuva de nevoeiro',
  'Nevoeiro',
  'Neve',
  'Granizo',
  'Chuva com neve',
  'Poeira',
  'Pebuloso',
  'Neblina',
  'Enfumaçado',
  'Tempestuoso',
  'Ventoso',
  'Frio',
  'Nublado',
  'Muito nublado (noite)',
  'Muito nublado (dia)',
  'Parcialmente nublado (noite)',
  'Parcialmente nublado (dia)',
  'Céu limpo (noite)',
  'Ensolarado',
  'Claro (noite)',
  'Claro (dia)',
  'Misto de chuva e granizo',
  'Quente',
  'Trovoadas isoladas',
  'Trovoadas',
  'Trovoadas',
  'Chuvas esparsas',
  'Neve',
  'Aguaceiros de neve espalhados',
  'Neve',
  'Parcialmente nublado',
  'Trovoadas',
  'Aguaceiros de neve',
  'Trovoadas isoladas'
];

export const translateCondition = (c) => {
  if (c == 3200) return 'Não disponível';
  if (c >= 0 && c <= 47) {
    return conditions[c];
  } else {
    return c;
  }
};

export default translateCondition;
