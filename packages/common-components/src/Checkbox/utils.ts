// eslint-disable-next-line import/prefer-default-export
export const getCheckboxColorCode = (
  colors: {
    [colorKey: string]: {
      [colorGrade: string]: string;
    };
  },
  colorScheme: string
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
) => colors[colorScheme][`${colorScheme}4`];
