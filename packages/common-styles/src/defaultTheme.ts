import * as colors from './colors';
import { ITheme } from './types';

const theme: ITheme = {
  colors: colors.default.colors,
  btnSize: {
    xs: {
      width: 80,
      height: 40,
    },
    sm: {
      width: 90,
      height: 45,
    },
    md: {
      width: 100,
      height: 50,
    },
    lg: {
      width: 110,
      height: 55,
    },
  },
  inputSize: {
    xs: {
      height: 24,
      borderRadius: 2,
      fontSize: 12,
    },
    sm: {
      height: 32,
      borderRadius: 4,
      fontSize: 15,
    },
    md: {
      height: 40,
      borderRadius: 6,
      fontSize: 18,
    },
    lg: {
      height: 48,
      borderRadius: 8,
      fontSize: 21,
    },
  },
  btnActionColor: {
    gray: {
      basic: colors.default.colors.gray.gray7,
      solid: {
        normal: colors.default.colors.gray.gray7,
        hover: colors.default.colors.gray.gray8,
        active: colors.default.colors.gray.gray9,
      },
      outline: {
        normal: colors.default.colors.gray.gray0,
        hover: colors.default.colors.gray.gray3,
        active: colors.default.colors.gray.gray5,
      },
      ghost: {
        normal: colors.default.colors.gray.gray0,
        hover: colors.default.colors.gray.gray3,
        active: colors.default.colors.gray.gray5,
      },
    },
    red: {
      basic: colors.default.colors.red.red6,
      solid: {
        normal: colors.default.colors.red.red6,
        hover: colors.default.colors.red.red8,
        active: colors.default.colors.red.red9,
      },
      outline: {
        normal: colors.default.colors.red.red0,
        hover: colors.default.colors.red.red3,
        active: colors.default.colors.red.red5,
      },
      ghost: {
        normal: colors.default.colors.red.red0,
        hover: colors.default.colors.red.red3,
        active: colors.default.colors.red.red5,
      },
    },
    orange: {
      basic: colors.default.colors.orange.orange7,
      solid: {
        normal: colors.default.colors.orange.orange7,
        hover: colors.default.colors.orange.orange8,
        active: colors.default.colors.orange.orange9,
      },
      outline: {
        normal: colors.default.colors.orange.orange0,
        hover: colors.default.colors.orange.orange3,
        active: colors.default.colors.orange.orange5,
      },
      ghost: {
        normal: colors.default.colors.orange.orange0,
        hover: colors.default.colors.orange.orange3,
        active: colors.default.colors.orange.orange5,
      },
    },
    yellow: {
      basic: colors.default.colors.yellow.yellow7,
      solid: {
        normal: colors.default.colors.yellow.yellow7,
        hover: colors.default.colors.yellow.yellow8,
        active: colors.default.colors.yellow.yellow9,
      },
      outline: {
        normal: colors.default.colors.yellow.yellow0,
        hover: colors.default.colors.yellow.yellow3,
        active: colors.default.colors.yellow.yellow5,
      },
      ghost: {
        normal: colors.default.colors.yellow.yellow0,
        hover: colors.default.colors.yellow.yellow3,
        active: colors.default.colors.yellow.yellow5,
      },
    },
    green: {
      basic: colors.default.colors.green.green7,
      solid: {
        normal: colors.default.colors.green.green7,
        hover: colors.default.colors.green.green8,
        active: colors.default.colors.green.green9,
      },
      outline: {
        normal: colors.default.colors.green.green0,
        hover: colors.default.colors.green.green3,
        active: colors.default.colors.green.green5,
      },
      ghost: {
        normal: colors.default.colors.green.green0,
        hover: colors.default.colors.green.green3,
        active: colors.default.colors.green.green5,
      },
    },
    teal: {
      basic: colors.default.colors.teal.teal7,
      solid: {
        normal: colors.default.colors.teal.teal7,
        hover: colors.default.colors.teal.teal8,
        active: colors.default.colors.teal.teal9,
      },
      outline: {
        normal: colors.default.colors.teal.teal0,
        hover: colors.default.colors.teal.teal3,
        active: colors.default.colors.teal.teal5,
      },
      ghost: {
        normal: colors.default.colors.teal.teal0,
        hover: colors.default.colors.teal.teal3,
        active: colors.default.colors.teal.teal5,
      },
    },
    blue: {
      basic: colors.default.colors.blue.blue7,
      solid: {
        normal: colors.default.colors.blue.blue7,
        hover: colors.default.colors.blue.blue8,
        active: colors.default.colors.blue.blue9,
      },
      outline: {
        normal: colors.default.colors.blue.blue0,
        hover: colors.default.colors.blue.blue3,
        active: colors.default.colors.blue.blue5,
      },
      ghost: {
        normal: colors.default.colors.blue.blue0,
        hover: colors.default.colors.blue.blue3,
        active: colors.default.colors.blue.blue5,
      },
    },
    cyan: {
      basic: colors.default.colors.cyan.cyan7,
      solid: {
        normal: colors.default.colors.cyan.cyan7,
        hover: colors.default.colors.cyan.cyan8,
        active: colors.default.colors.cyan.cyan9,
      },
      outline: {
        normal: colors.default.colors.cyan.cyan0,
        hover: colors.default.colors.cyan.cyan3,
        active: colors.default.colors.cyan.cyan5,
      },
      ghost: {
        normal: colors.default.colors.cyan.cyan0,
        hover: colors.default.colors.cyan.cyan3,
        active: colors.default.colors.cyan.cyan5,
      },
    },
    purple: {
      basic: colors.default.colors.violet.violet7,
      solid: {
        normal: colors.default.colors.violet.violet7,
        hover: colors.default.colors.violet.violet8,
        active: colors.default.colors.violet.violet9,
      },
      outline: {
        normal: colors.default.colors.violet.violet0,
        hover: colors.default.colors.violet.violet3,
        active: colors.default.colors.violet.violet5,
      },
      ghost: {
        normal: colors.default.colors.violet.violet0,
        hover: colors.default.colors.violet.violet3,
        active: colors.default.colors.violet.violet5,
      },
    },
    pink: {
      basic: colors.default.colors.pink.pink7,
      solid: {
        normal: colors.default.colors.pink.pink7,
        hover: colors.default.colors.pink.pink8,
        active: colors.default.colors.pink.pink9,
      },
      outline: {
        normal: colors.default.colors.pink.pink0,
        hover: colors.default.colors.pink.pink3,
        active: colors.default.colors.pink.pink5,
      },
      ghost: {
        normal: colors.default.colors.pink.pink0,
        hover: colors.default.colors.pink.pink3,
        active: colors.default.colors.pink.pink5,
      },
    },
  },
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
};

export default theme;
