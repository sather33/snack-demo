function setState (key, data) {
  sessionStorage.setItem(key, JSON.stringify(data))
}

function loadDataToStorage() {
  setState('restaurants', data)
}

function loadDataGroupByCity () {
  const data = getRestaurant();
  const dataGroupByCity = groupBy(data, 'City')

  setState('restaurantsGroupByCity', dataGroupByCity)
}

function loadChunkRestaurants () {
  const data = getRestaurant();
  const chunkedRestaurants = chunk(data, 10)

  setState('chunkRestaurants', chunkedRestaurants)
}

function loadCities () {
  const restaurantsGroupByCity = getRestaurantsGroupByCity()
  const cities = Object.keys(restaurantsGroupByCity).reduce(function(carry, city) {
    const district = restaurantsGroupByCity[city]
    const groupByDistrict = groupBy(district, 'Town')
    const districtNames = Object.keys(groupByDistrict)

    carry[city] = districtNames
    return carry
  }, {})

  setState('cities', cities)
}