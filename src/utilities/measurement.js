export const toFeet = value => {
  const multiplier = 3.2808
  const result = value * multiplier

  return result.toFixed(1)
}

export const toPounds = value => {
  const multiplier = 2.20462262185
  const result = value * multiplier
  
  return result.toFixed(1)
}
