
export const seedData = {
    users: {
      _model: "User",
      homer: {
        firstName: "Homer",
        lastName: "Simpson",
        email: "homer@simpson.com",
        password: "secret"
      },
      marge: {
        firstName: "Marge",
        lastName: "Simpson",
        email: "marge@simpson.com",
        password: "secret"
      },
      bart: {
        firstName: "Bart",
        lastName: "Simpson",
        email: "bart@simpson.com",
        password: "secret"
      }
    },
    lists: {
      _model: "List",
      faveBeaches: {
        title: "Favourite Beaches",
        userid: "->users.homer"
      },
      munsterFavourites: {
        title: "Munster Favourites",
        userid: "->users.homer"
      },
      placesNotYetVisited: {
        title: "Places Not Yet Visited",
        userid: "->users.Marge"
      }
    },
    placemarks: {
      _model : "Placemark",
      placemark1 : {
        name: "Clonea",
        category: "Beach",
        description: "Mozart",
        latitude: 3.75,
        longitude: 15.4,
        userid: "->users.homer",
        listid: "->lists.faveBeaches"
      },
    }
  };