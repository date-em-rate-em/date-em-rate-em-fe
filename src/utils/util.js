export const starRating = (averageRating) => {
    const stars = '⭐️'
    return stars.repeat(Math.floor(averageRating))
  }