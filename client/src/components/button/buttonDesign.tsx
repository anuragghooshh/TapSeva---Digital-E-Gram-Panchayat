const buttonCommonStyle = 'h-min min-w-32 font-regular font-work text-sm md:text-base rounded-md button'
const buttonAnimation = 'transition-transform duration-200 ease-bounce'

export const buttonDesign: { [key: string]: string } = {
  stroked: `${buttonCommonStyle} ${buttonAnimation} border border-dark`,
  stroked_dark: `${buttonCommonStyle} ${buttonAnimation} border border-dark text-dark`,
  stroked_light: `${buttonCommonStyle} ${buttonAnimation} border border-light-100 text-light-100`,
  stroked_color: `${buttonCommonStyle} ${buttonAnimation} border border-secondary text-secondary`,
  stroked_negative: `${buttonCommonStyle} ${buttonAnimation} border border-negative-400 text-negative-400`,
  stroked_positive: `${buttonCommonStyle} ${buttonAnimation} border border-positive-400 text-positive-400`,
  stroked_disabled: `${buttonCommonStyle} border border-neutral-200 text-neutral-500 cursor-not-allowed`,

  filled: `${buttonCommonStyle} ${buttonAnimation} bg-primary text-light-100`,
  filled_dark: `${buttonCommonStyle} ${buttonAnimation} bg-dark text-light-100`,
  filled_light: `${buttonCommonStyle} ${buttonAnimation} bg-light-100 text-dark`,
  filled_color: `${buttonCommonStyle} ${buttonAnimation} bg-secondary text-light-100`,
  filled_negative: `${buttonCommonStyle} ${buttonAnimation} bg-negative-400 text-light-100`,
  filled_positive: `${buttonCommonStyle} ${buttonAnimation} bg-positive-400 text-light-100`,
  filled_disabled: `${buttonCommonStyle} bg-neutral-200 text-neutral-500 cursor-not-allowed`,

  dark: `${buttonCommonStyle} ${buttonAnimation} bg-dark text-light-100`,
  light: `${buttonCommonStyle} ${buttonAnimation} bg-light-100 text-dark`,
  color: `${buttonCommonStyle} ${buttonAnimation} bg-secondary text-light-100`,
  negative: `${buttonCommonStyle} ${buttonAnimation} bg-negative-400 text-light-100`,
  positive: `${buttonCommonStyle} ${buttonAnimation} bg-positive-400 text-light-100`,
  disabled: `${buttonCommonStyle} bg-neutral-200 text-neutral-500 cursor-not-allowed`
};
