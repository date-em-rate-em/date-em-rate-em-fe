export const starRating = (averageRating) => {
    const stars = '⭐️'
    return stars.repeat(Math.floor(averageRating))
  }

export const formatPayment = (payment) => {
    const dolla = '💲'
    return dolla.repeat(Math.floor(payment))
}

export const formatSize = (size) => {
    if(size <= 3) {
        return 'Teeny weeny.'
    } else if(size >= 4 && size <=6){
        return 'Meh, nothing to write home about.'
    } else {
        return 'Above average.'
    }
}