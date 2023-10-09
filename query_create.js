const { cars } = require('./models');

cars.create({ name: 'BMW', image: 'images4', capacity: '2', rentPerDay: '500000', description: 'ini kenceng', availableAt: new Date(), createdAt: new Date(), updatedAt: new Date() })
    .then((data) => { console.log(data) }).catch((err) => { console.log(err) })
