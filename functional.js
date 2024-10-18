function splitCSV(CSV){
    let index = 1;
    
    const cities= CSV
    .split('\n')
    .filter((row) => /[\d]/.test(row[0]))
    .map((row) => {
    row = row.split(',')
    return  {'x': row[0], 'y': row[1], 'name': row[2], 'population': row[3]}
    })
    .sort((a, b) => b.population - a.population)
    .slice(0, 9)
    .reduce((acc, city) => {
        const name = city.name.replace(/[^а-яА-ЯіІ']/,'');
        if(!acc[name]){
            acc[name] = [];
        }
        acc[name] = {
        'population': city.population,
        'rating': index
      }
      index++
      return acc;
    },{})

    return (city = Object.keys(cities)[0]) => {
        const name = city
        const originalString = 'назва міста (Х місце в ТОП-10 найбільших міст України, населення УУУУУУ чоловік)'
        return originalString
        .replace("назва міста", name)
        .replace('Х', cities[city].rating)
        .replace("УУУУУУ", cities[city].population) 
    }
}

let  makeText = (city) =>{
    console.log();
    const name = city
    const originalString = 'назва міста (Х місце в ТОП-10 найбільших міст України, населення УУУУУУ чоловік)'
    return originalString
    .replace("назва міста", name)
    .replace('Х', city.rating)
    .replace("УУУУУУ", city.population)

}

const getCity = splitCSV(`44.38,34.33,Алушта,31440,
49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некомент

#
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,
#45.40,34.29,Джанкой,43343,

# в цьому файлі три рядки-коментарі`)

console.log(getCity('Вінниця'));
console.log(getCity('Алушта'));
console.log(getCity('Бердянськ'));